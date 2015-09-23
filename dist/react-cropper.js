'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('cropper');

require('cropper/dist/cropper.css');

var Cropper = _react2['default'].createClass({
  displayName: 'Cropper',

  propTypes: {
    // react cropper options
    crossOrigin: _react2['default'].PropTypes.string,
    src: _react2['default'].PropTypes.string,
    alt: _react2['default'].PropTypes.string,

    // cropper options
    aspectRatio: _react2['default'].PropTypes.number,
    crop: _react2['default'].PropTypes.func,
    preview: _react2['default'].PropTypes.string,
    strict: _react2['default'].PropTypes.bool,
    responsive: _react2['default'].PropTypes.bool,
    checkImageOrigin: _react2['default'].PropTypes.bool,
    background: _react2['default'].PropTypes.bool,
    modal: _react2['default'].PropTypes.bool,
    guides: _react2['default'].PropTypes.bool,
    highlight: _react2['default'].PropTypes.bool,
    autoCrop: _react2['default'].PropTypes.bool,
    autoCropArea: _react2['default'].PropTypes.number,
    dragCrop: _react2['default'].PropTypes.bool,
    movable: _react2['default'].PropTypes.bool,
    cropBoxMovable: _react2['default'].PropTypes.bool,
    cropBoxResizable: _react2['default'].PropTypes.bool,
    doubleClickToggle: _react2['default'].PropTypes.bool,
    zoomable: _react2['default'].PropTypes.bool,
    mouseWheelZoom: _react2['default'].PropTypes.bool,
    touchDragZoom: _react2['default'].PropTypes.bool,
    rotatable: _react2['default'].PropTypes.bool,
    minContainerWidth: _react2['default'].PropTypes.number,
    minContainerHeight: _react2['default'].PropTypes.number,
    minCanvasWidth: _react2['default'].PropTypes.number,
    minCanvasHeight: _react2['default'].PropTypes.number,
    minCropBoxWidth: _react2['default'].PropTypes.number,
    minCropBoxHeight: _react2['default'].PropTypes.number,
    build: _react2['default'].PropTypes.func,
    built: _react2['default'].PropTypes.func,
    dragstart: _react2['default'].PropTypes.func,
    dragmove: _react2['default'].PropTypes.func,
    dragend: _react2['default'].PropTypes.func,
    zoomin: _react2['default'].PropTypes.func,
    zoomout: _react2['default'].PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      src: null
    };
  },

  componentDidMount: function componentDidMount() {
    var options = {};
    for (var prop in this.props) {
      if (prop !== 'src' && prop !== 'alt' && prop !== 'crossOrigin') {
        options[prop] = this.props[prop];
      }
    }
    this.$img = (0, _jquery2['default'])((0, _reactDom.findDOMNode)(this.refs.img));
    this.$img.cropper(options);
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.replace(nextProps.src);
    }
    if (nextProps.aspectRatio !== this.props.aspectRatio) {
      this.setAspectRatio(nextProps.aspectRatio);
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.$img) {
      // Destroy the cropper, this makes sure events such as resize are cleaned up and do not leak
      this.$img.cropper('destroy');
      // While we're at it remove our reference to the jQuery instance
      delete this.$img;
    }
  },

  move: function move(offsetX, offsetY) {
    return this.$img.cropper('move', offsetX, offsetY);
  },

  zoom: function zoom(ratio) {
    return this.$img.cropper('zoom', ratio);
  },

  rotate: function rotate(degree) {
    return this.$img.cropper('rotate', degree);
  },

  enable: function enable() {
    return this.$img.cropper('enable');
  },

  disable: function disable() {
    return this.$img.cropper('disable');
  },

  reset: function reset() {
    return this.$img.cropper('reset');
  },

  clear: function clear() {
    return this.$img.cropper('clear');
  },

  replace: function replace(url) {
    return this.$img.cropper('replace', url);
  },

  getData: function getData() {
    return this.$img.cropper('getData');
  },

  getContainerData: function getContainerData() {
    return this.$img.cropper('getContainerData');
  },

  getImageData: function getImageData() {
    return this.$img.cropper('getImageData');
  },

  getCanvasData: function getCanvasData() {
    return this.$img.cropper('getCanvasData');
  },

  setCanvasData: function setCanvasData(data) {
    return this.$img.cropper('setCanvasData', data);
  },

  getCropBoxData: function getCropBoxData() {
    return this.$img.cropper('getCropBoxData');
  },

  setCropBoxData: function setCropBoxData(data) {
    return this.$img.cropper('setCropBoxData', data);
  },

  getCroppedCanvas: function getCroppedCanvas(options) {
    return this.$img.cropper('getCroppedCanvas', options);
  },

  setAspectRatio: function setAspectRatio(aspectRatio) {
    return this.$img.cropper('setAspectRatio', aspectRatio);
  },

  setDragMode: function setDragMode() {
    return this.$img.cropper('setDragMode');
  },

  on: function on(eventname, callback) {
    return this.$img.on(eventname, callback);
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { src: null, crossOrigin: null, alt: null }),
      _react2['default'].createElement('img', {
        crossOrigin: this.props.crossOrigin,
        ref: 'img',
        src: this.props.src,
        alt: this.props.alt === undefined ? 'picture' : this.props.alt,
        style: { opacity: 0 }
      })
    );
  }
});

exports['default'] = Cropper;
module.exports = exports['default'];