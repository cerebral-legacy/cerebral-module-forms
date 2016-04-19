import React, {Component} from 'react'
import { Decorator as Cerebral } from 'cerebral-view-react';
import isValidForm from 'cerebral-module-forms/helpers/isValidForm';
import uploadController from 'upload-controller';

@Cerebral({
  form: ['uploadSimple' ],
  file: ['uploadSimple', 'file', 'value', '0' ]
})
class Upload extends Component {

  constructor(props) {
    super(props);
    this.files = [];
    this.onFilesChange = this.onFilesChange.bind(this);
    this.upload = this.upload.bind(this);

  }

  onFilesChange(event) {
  	const {signals} = this.props;
  	let files = event.target.files;
    signals.uploadSimple.filesAdded({
    	file: {
      		name: files[0].name,
      		size: files[0].size,
      		uploadDone: false,
      		percentComplete: null
      	},
      	field: ['uploadSimple' , 'file'],
      	touched: true
    });
    this.files = files;
  }

  upload() {
  	const {signals} = this.props;

    uploadController(this.files, {
   	  url: '/upload',
      onProgress: signals.uploadSimple.onFileProgress,
      onEnd: signals.uploadSimple.onFileEnd
    });
    this.refs.fileInput.value = '';

  }
  renderError(){
  	const {form} = this.props;
  	if( form.file.errorMessage ){
  		return (
  			<span style={{color: 'red'}}>{form.file.errorMessage}</span>
  		);
  	}

  	return null;
  }

  renderProgress(){
  	const {file} = this.props;
  	if( file && file.percentComplete ){
  		if( file.uploadDone ){
  			return null;
  		}
  		let percentComplete = file.percentComplete;
  		return(
  			<div style={{width: 200, height: 20, borderRadius: 4, border: '1px solid #ccc'}}>
  				<div style={{padding: 2, height: 16,width: `${percentComplete}%`, backgroundColor: 'green'}}>

  				</div>
  			</div>
  		);
  	}

  	return null;
  }

  renderMakeUpload(){
  	const {file,form} = this.props;
  	if( file && file.percentComplete && ! file.uploadDone ){
  		return null;
  	}

  	return(
  		<div>
  		  <input type={'file'} ref={'fileInput'} onChange={this.onFilesChange}/><br/><br/>
          <button disabled={!form.file.isTouched || !isValidForm(form)} onClick={this.upload}>Upload</button>
  		</div>
  	);

  }

  render() {
    const {form,file} = this.props;
    return (

      <div>
          <h1>Upload simple</h1>
          <h4>Please choose a file. Must be pdf or mp4</h4>
          {this.renderError()}<br/>
          {this.renderProgress()}
          {this.renderMakeUpload()}
      </div>
    );
  }
}

export default Upload;
