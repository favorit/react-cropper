import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import CropperJS from 'cropperjs'
import 'cropperjs/dist/cropper.css'

export default class Cropper extends React.Component {

  static propTypes = {
    // react cropper options
    crossOrigin: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.object,

    // cropper options
    viewMode: PropTypes.oneOf([0, 1, 2, 3]),
    dragMode: PropTypes.oneOf(['crop', 'move', 'none']),
    aspectRatio: PropTypes.number,
    data: PropTypes.object,
    preview: PropTypes.string,
    responsive: PropTypes.bool,
    restore: PropTypes.bool,
    checkCrossOrigin: PropTypes.bool,
    modal: PropTypes.bool,
    guides: PropTypes.bool,
    center: PropTypes.bool,
    highlight: PropTypes.bool,
    background: PropTypes.bool,
    autoCrop: PropTypes.bool,
    autoCropArea: PropTypes.number,
    movable: PropTypes.bool,
    rotatable: PropTypes.bool,
    scalable: PropTypes.bool,
    zoomable: PropTypes.bool,
    zoomOnTouch: PropTypes.bool,
    zoomOnWheel: PropTypes.bool,
    wheelZoomRatio: PropTypes.number,
    cropBoxMovable: PropTypes.bool,
    cropBoxResizable: PropTypes.bool,
    toggleDragModeOnDblclick: PropTypes.bool,
    minContainerWidth: PropTypes.number,
    minContainerHeight: PropTypes.number,
    minCanvasWidth: PropTypes.number,
    minCanvasHeight: PropTypes.number,
    minCropBoxWidth: PropTypes.number,
    minCropBoxHeight: PropTypes.number,

    build: PropTypes.func,
    built: PropTypes.func,
    cropstart: PropTypes.func,
    cropmove: PropTypes.func,
    cropend: PropTypes.func,
    crop: PropTypes.func,
    zoom: PropTypes.func
  }

  static defaultProps = {
    src: null
  }

  componentDidMount() {
    var options = {}
    for (var prop in this.props) {
      if (prop !== 'src' && prop !== 'alt' && prop !== 'crossOrigin' && prop !== 'style') {
        options[prop] = this.props[prop]
      }
    }
    this.cropper = new CropperJS(this.refs.img, options)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.replace(nextProps.src)
    }
    if (nextProps.aspectRatio !== this.props.aspectRatio) {
      this.setAspectRatio(nextProps.aspectRatio)
    }
  }

  componentWillUnmount() {
    if (this.cropper) {
      // Destroy the cropper, this makes sure events such as resize are cleaned up and do not leak
      this.cropper.destroy()
      // While we're at it remove our reference to the jQuery instance
      delete this.cropper
    }
  }

  move(offsetX, offsetY) {
    return this.cropper.move(offsetX, offsetY)
  }

  zoom(ratio) {
    return this.cropper.zoom(ratio)
  }

  rotate(degree) {
    return this.cropper.rotate(degree)
  }

  enable() {
    return this.cropper.enable()
  }

  disable() {
    return this.cropper.disable()
  }

  reset() {
    return this.cropper.reset()
  }

  clear() {
    return this.cropper.clear()
  }

  replace(url) {
    return this.cropper.replace(url)
  }

  getData(rounded) {
    return this.cropper.getData(rounded)
  }

  getContainerData() {
    return this.cropper.getContainerData()
  }

  getImageData() {
    return this.cropper.getImageData()
  }

  getCanvasData() {
    return this.cropper.getCanvasData()
  }

  setCanvasData(data) {
    return this.cropper.setCanvasData(data)
  }

  getCropBoxData() {
    return this.cropper.getCropBoxData()
  }

  setCropBoxData(data) {
    return this.cropper.setCropBoxData(data)
  }

  getCroppedCanvas(options) {
    return this.cropper.getCroppedCanvas(options)
  }

  setAspectRatio(aspectRatio) {
    return this.cropper.setAspectRatio(aspectRatio)
  }

  setDragMode(dragMode) {
    return this.cropper.setDragMode(dragMode)
  }

  on(eventname, callback) {
    return this.on(eventname, callback)
  }

  render() {
    const { crossOrigin, src, alt } = this.props
    return (
      <div {...this.props} src={null} crossOrigin={null} alt={null}>
        <img
          crossOrigin={crossOrigin}
          ref="img"
          src={src}
          alt={alt === undefined ? 'picture' : alt}
          style={{opacity: 0}}
          />
      </div>
    )
  }
}
