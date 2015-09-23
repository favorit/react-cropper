import React from 'react';
import { render } from 'react-dom';

import Cropper from '../dist/react-cropper';

const Demo = React.createClass({

  getInitialState() {
    return {
      src: 'http://fengyuanchen.github.io/cropper/img/picture.jpg',
      preview: null
    };
  },

  _crop(){
    this.setState({
      preview: this.refs.cropper.getCroppedCanvas().toDataURL()
    });
  },

  _onChange(e){
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    let reader = new FileReader();
    reader.onload = () => {
      this.setState({src: reader.result});
    };
    reader.readAsDataURL(files[0]);
  },

  _useDefaultImage(){
    this.setState({src: this.getInitialState().src});
  },

  render() {
    return (
      <div>
        <div className='box' style={{width: '70%', float: 'left'}}>
          <input type='file' onChange={this._onChange} />
          <button onClick={this._useDefaultImage}>Use default img</button>
          <br/>
          <Cropper
            style={{height: 400, width: '100%'}}
            aspectRatio={16 / 9}
            guides={false}
            src={this.state.src}
            ref='cropper'
            crop={this._crop} />
        </div>

        <div className='box' style={{width: '30%', float: 'right'}}>
          <h1>Preview</h1>
          <img style={{width: '100%'}} src={this.state.preview}/>
        </div>
        <br style={{clear: 'both'}}/>
      </div>
    );
  }

});

render(<Demo />, document.getElementById('main'));
