import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ApiService} from 'src/app/services/api.service';

declare var $: any;

@Component({
  selector: 'document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
  zoom: number = 0.5;

  renderText = true;
  originalSize = false;
  fitToPage = false;
  showAll = true;
  autoresize = false;
  showBorders = true;
  renderTextModes = [0, 1, 2];
  renderTextMode = 1;
  rotation = 0;
  zoomScale = 'page-width';
  zoomScales = ['page-width', 'page-fit', 'page-height'];
  pdfQuery = '';
  totalPages: number;


  @Input('docData') docFile: any;
  @Input('docIndex') docIndex: any;
  @Input('docHeight') docHeight: any;
  src: SafeResourceUrl;
  pdfFilePath: string = null;
  canvasShow: boolean = false;
  HidepdfViewer: boolean = true;

  base_64_string = '';
  pdfSource;

  constructor(
      public _api: ApiService,
      private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
    if (!this.docHeight) {
      this.docHeight = 400
    }
    if (!this.docIndex) {
      this.docIndex = ''
    }
    // this.docFile = this.docFile.replace('http://localhost:4200/', 'http://13.127.241.98:9998/')

    // this.docFile =  'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'
    // this.docFile = this.getPageUrl() + '/assets/files/CBC-notes.pdf'
    // this.docFile = this.getPageUrl() + '/assets/files/EA03432819_008755138_121001_AGEPROOF_11042022110129__pg1.pdf'
    // this.docFile = this.getPageUrl() + '/assets/files/EA03284117_008674679_UW_MEDICAL_BILLABLE_REQUIREMENT_121116_16_jE6nOda.pdf'
    if (this.docFile) {
      if (this.docFile.includes(".pdf")) {
        this.canvasShow = true;
        this.HidepdfViewer = false;
        // this.src = this.docFile
        // this.pdfFilePath = this.docFile
        this.pdfFilePath = this.docFile + '#toolbar=0&zoom=' + (this.zoom * 10);
        this.setUrl(this.pdfFilePath)
        // this.pdfSource = this._base64ToArrayBuffer(this.pdfFilePath);
        // let file = new Blob([this.pdfFilePath], { type: 'application/pdf' });
        // this.pdfSource = URL.createObjectURL(file);
        // this._api.getPDF(this.pdfFilePath).subscribe((response) => {

        //   let file = new Blob([response.byteString], { type: 'application/pdf' });
        //   this.pdfSource = URL.createObjectURL(file);

        //   // window.open(fileURL);
        // })


        // this.setUrl(this.pdfFilePath)

      } else {
        this.canvasShow = false;
        this.HidepdfViewer = true;
        this.setUrl(this.docFile)
        setTimeout(() => {
          this.canvasPreview(this.src);
        }, 50)
      }
    }
  }

  _base64ToArrayBuffer(base64) {
    const binary_string = window.atob(base64);
    // const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }


  setUrl(url) {
    this.cleanup();
    setTimeout(() => {
      this.src = this.bypassAndSanitize(url);
    }, 50);
  }

  cleanup() {
    this.src = null;
  }

  bypassAndSanitize(url): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getPageUrl() {
    // return location.protocol + "//" + location.host + '';
    return 'http://3.7.179.34:8078';
    // return 'https://alternativebkd.ausis.ai';
  }

  incrementZoom(amount: number) {
    this.zoom += amount;

  }

  canvasPreview(src_image, first: boolean = false) {
    const canvas: any = document.getElementById('canvas' + this.docIndex);
    // canvas.width = 300;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');
    const gkhead = new Image;
    gkhead.src = src_image.changingThisBreaksApplicationSecurity;

    gkhead.onload = function () {
      let lastX = canvas.width / 2, lastY = canvas.height / 2;

      let dragStart, dragged;

      function trackTransforms(ctx) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        let xform: any = svg.createSVGMatrix();
        ctx.getTransform = function () {
          return xform;
        };

        const pt = svg.createSVGPoint();
        ctx.transformedPoint = function (x, y) {
          pt.x = x;
          pt.y = y;
          return pt.matrixTransform(xform.inverse());
        };
        const savedTransforms = [];
        const save = ctx.save;
        ctx.save = function () {
          savedTransforms.push(xform.translate(0, 0));
          return save.call(ctx);
        };

        const restore = ctx.restore;
        ctx.restore = function () {
          xform = savedTransforms.pop();
          return restore.call(ctx);
        };

        const scale = ctx.scale;
        ctx.scale = function (sx, sy) {
          xform = xform.scaleNonUniform(sx, sy);
          return scale.call(ctx, sx, sy);
        };

        const rotate = ctx.rotate;
        ctx.rotate = function (radians) {
          xform = xform.rotate(radians * 180 / Math.PI);
          return rotate.call(ctx, radians);
        };

        const translate = ctx.translate;
        ctx.translate = function (dx, dy) {
          xform = xform.translate(dx, dy);
          return translate.call(ctx, dx, dy);
        };

        const transform = ctx.transform;
        ctx.transform = function (a, b, c, d, e, f) {
          const m2 = svg.createSVGMatrix();
          m2.a = a;
          m2.b = b;
          m2.c = c;
          m2.d = d;
          m2.e = e;
          m2.f = f;
          xform = xform.multiply(m2);
          return transform.call(ctx, a, b, c, d, e, f);
        };

        const setTransform = ctx.setTransform;
        ctx.setTransform = function (a, b, c, d, e, f) {
          xform.a = a;
          xform.b = b;
          xform.c = c;
          xform.d = d;
          xform.e = e;
          xform.f = f;
          return setTransform.call(ctx, a, b, c, d, e, f);
        };


      }

      function redraw() {
        // Clear the entire canvas
        const p1 = ctx.transformedPoint(0, 0);
        const p2 = ctx.transformedPoint(canvas.width, canvas.height);
        ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);

        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        ctx.drawImage(gkhead, 0, 0, canvas.width, canvas.height);
      }

      const zoom = function (clicks) {
        // var pt = ctx.transformedPoint(lastX,lastY);
        ctx.translate(canvas.width / 2, canvas.height / 2);
        const factor = Math.pow(scaleFactor, clicks);
        ctx.scale(factor, factor);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);
        redraw();
      };

      const scaleFactor = 1.1;


      canvas.addEventListener('mousedown', function (evt) {
        // document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
        lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
        lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
        dragStart = ctx.transformedPoint(lastX, lastY);
        dragged = false;
      }, false);

      canvas.addEventListener('mousemove', function (evt) {
        lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
        lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
        dragged = true;
        if (dragStart) {
          const pt = ctx.transformedPoint(lastX, lastY);
          ctx.translate(pt.x - dragStart.x, pt.y - dragStart.y);
          redraw();
        }
      }, false);

      canvas.addEventListener('mouseup', function (evt) {
        dragStart = null;
        // if (!dragged) zoom(evt.shiftKey ? -1 : 1 );
      }, false);

      canvas.addEventListener('mouseout', function (evt) {
        dragStart = null;
        // if (!dragged) zoom(evt.shiftKey ? -1 : 1 );
      }, false);

      trackTransforms(ctx);
      $('#zoomin').unbind('click');
      $('#zoomout').unbind('click');
      $('#zoomin').click(function () {
        zoom(1);
      });
      $('#zoomout').click(function () {
        zoom(-1);
      });

      // setTimeout(()=>{    //<<<---    using ()=> syntax
      //   redraw();
      // }, 1500);
      redraw();
    };

  }


}
