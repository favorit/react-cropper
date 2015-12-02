'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

//import $ from 'jquery'

var _cropperjs = require('cropperjs');

var _cropperjs2 = _interopRequireDefault(_cropperjs);

require('cropperjs/dist/cropper.css');

var Cropper = (function (_React$Component) {
  _inherits(Cropper, _React$Component);

  function Cropper() {
    _classCallCheck(this, Cropper);

    _get(Object.getPrototypeOf(Cropper.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Cropper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var options = {};
      for (var prop in this.props) {
        if (prop !== 'src' && prop !== 'alt' && prop !== 'crossOrigin' && prop !== 'style') {
          options[prop] = this.props[prop];
        }
      }
      this.cropper = new _cropperjs2['default'](this.refs.img, options);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.src !== this.props.src) {
        this.replace(nextProps.src);
      }
      if (nextProps.aspectRatio !== this.props.aspectRatio) {
        this.setAspectRatio(nextProps.aspectRatio);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.cropper) {
        // Destroy the cropper, this makes sure events such as resize are cleaned up and do not leak
        this.cropper.destroy();
        // While we're at it remove our reference to the jQuery instance
        delete this.cropper;
      }
    }
  }, {
    key: 'move',
    value: function move(offsetX, offsetY) {
      return this.cropper.move(offsetX, offsetY);
    }
  }, {
    key: 'zoom',
    value: function zoom(ratio) {
      return this.cropper.zoom(ratio);
    }
  }, {
    key: 'rotate',
    value: function rotate(degree) {
      return this.cropper.rotate(degree);
    }
  }, {
    key: 'enable',
    value: function enable() {
      return this.cropper.enable();
    }
  }, {
    key: 'disable',
    value: function disable() {
      return this.cropper.disable();
    }
  }, {
    key: 'reset',
    value: function reset() {
      return this.cropper.reset();
    }
  }, {
    key: 'clear',
    value: function clear() {
      return this.cropper.clear();
    }
  }, {
    key: 'replace',
    value: function replace(url) {
      return this.cropper.replace(url);
    }
  }, {
    key: 'getData',
    value: function getData(rounded) {
      return this.cropper.getData(rounded);
    }
  }, {
    key: 'getContainerData',
    value: function getContainerData() {
      return this.cropper.getContainerData();
    }
  }, {
    key: 'getImageData',
    value: function getImageData() {
      return this.cropper.getImageData();
    }
  }, {
    key: 'getCanvasData',
    value: function getCanvasData() {
      return this.cropper.getCanvasData();
    }
  }, {
    key: 'setCanvasData',
    value: function setCanvasData(data) {
      return this.cropper.setCanvasData(data);
    }
  }, {
    key: 'getCropBoxData',
    value: function getCropBoxData() {
      return this.cropper.getCropBoxData();
    }
  }, {
    key: 'setCropBoxData',
    value: function setCropBoxData(data) {
      return this.cropper.setCropBoxData(data);
    }
  }, {
    key: 'getCroppedCanvas',
    value: function getCroppedCanvas(options) {
      return this.cropper.getCroppedCanvas(options);
    }
  }, {
    key: 'setAspectRatio',
    value: function setAspectRatio(aspectRatio) {
      return this.cropper.setAspectRatio(aspectRatio);
    }
  }, {
    key: 'setDragMode',
    value: function setDragMode(dragMode) {
      return this.cropper.setDragMode(dragMode);
    }
  }, {
    key: 'on',
    value: function on(eventname, callback) {
      return this.on(eventname, callback);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var crossOrigin = _props.crossOrigin;
      var src = _props.src;
      var alt = _props.alt;

      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { src: null, crossOrigin: null, alt: null }),
        _react2['default'].createElement('img', {
          crossOrigin: crossOrigin,
          ref: 'img',
          src: src,
          alt: alt === undefined ? 'picture' : alt,
          style: { opacity: 0 }
        })
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      // react cropper options
      crossOrigin: _react.PropTypes.string,
      src: _react.PropTypes.string,
      alt: _react.PropTypes.string,
      style: _react.PropTypes.object,

      // cropper options
      viewMode: _react.PropTypes.oneOf([0, 1, 2, 3]),
      dragMode: _react.PropTypes.oneOf(['crop', 'move', 'none']),
      aspectRatio: _react.PropTypes.number,
      data: _react.PropTypes.object,
      preview: _react.PropTypes.string,
      responsive: _react.PropTypes.bool,
      restore: _react.PropTypes.bool,
      checkCrossOrigin: _react.PropTypes.bool,
      modal: _react.PropTypes.bool,
      guides: _react.PropTypes.bool,
      center: _react.PropTypes.bool,
      highlight: _react.PropTypes.bool,
      background: _react.PropTypes.bool,
      autoCrop: _react.PropTypes.bool,
      autoCropArea: _react.PropTypes.number,
      movable: _react.PropTypes.bool,
      rotatable: _react.PropTypes.bool,
      scalable: _react.PropTypes.bool,
      zoomable: _react.PropTypes.bool,
      zoomOnTouch: _react.PropTypes.bool,
      zoomOnWheel: _react.PropTypes.bool,
      wheelZoomRatio: _react.PropTypes.number,
      cropBoxMovable: _react.PropTypes.bool,
      cropBoxResizable: _react.PropTypes.bool,
      toggleDragModeOnDblclick: _react.PropTypes.bool,
      minContainerWidth: _react.PropTypes.number,
      minContainerHeight: _react.PropTypes.number,
      minCanvasWidth: _react.PropTypes.number,
      minCanvasHeight: _react.PropTypes.number,
      minCropBoxWidth: _react.PropTypes.number,
      minCropBoxHeight: _react.PropTypes.number,

      build: _react.PropTypes.func,
      built: _react.PropTypes.func,
      cropstart: _react.PropTypes.func,
      cropmove: _react.PropTypes.func,
      cropend: _react.PropTypes.func,
      crop: _react.PropTypes.func,
      zoom: _react.PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      src: null
    },
    enumerable: true
  }]);

  return Cropper;
})(_react2['default'].Component);

exports['default'] = Cropper;
module.exports = exports['default'];