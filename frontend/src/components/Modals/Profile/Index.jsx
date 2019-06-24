import React, {Component} from 'react'
import Modal from 'react-modal'
import FormGroup from '../../ui/FormGroup'
import CloseButton from '../../ui/CloseButton'
import checkImageFile from '../../../utils/profile/checkImageType'
import UserIcon from '../../../assets/user.png'
import Loader from '../../ui/Loader'
import {updateProfileRequest} from '../../../store/actions/users'
import './style.css'

Modal.setAppElement('#root')

class EditProfile extends Component {
    state = {
        imageURL: '',
        interest: '',
        imageFile: {}
    }

    componentDidMount(){
        console.log('-----------', this.props)
        this.setState({imageURL: this.props.imageURL, interest: this.props.interest})
    }

    componentDidUpdate(prevProps){
        if(this.props &&  prevProps.imageURL !== this.props.imageURL){
            this.setState({imageURL: this.props.imageURL})
        }

        if(this.props && prevProps.interest !== this.props.interest){
            this.setState({interest: this.props.interest})
        }
    }

    handleChange = (event) => {
        this.setState({interest: event.target.value})
    }


    handleImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const filereader = new FileReader();
            checkImageFile(filereader, file, fileType => {
                if (
                    fileType === "image/png" ||
                    fileType === "image/gif" ||
                    fileType === "image/jpeg"
                ) {
                    this.setState({ imageFile: file });
                    filereader.onload = e => {
                        this.setState({ imageURL: e.target.result });
                    };
                    filereader.readAsDataURL(file);
                } else {
                    return this.setState({ imageURL: this.props.imageURL });
                    
                }
            });
        } else {
            this.setState({ imageURL: this.props.imageURL, imageFile: {} });
        }
    };

    handleSubmit = (event) => {
        event.preventDefault()
        updateProfileRequest(this.state, this.props.alert, this.props.dispatch)
    }

    render(){
        return (
            <div>
                <Modal
                    isOpen={this.props.modalIsOpen}
                    onAfterOpen={this.props.afterOpenModal}
                    onRequestClose={this.props.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <CloseButton
                    handleClick={this.props.closeModal}
                    />
                    <div className='modal-container'>
                        <div className ='image-container'> 
                        <img src={this.state.imageURL || UserIcon} alt=''/>
                        </div>
                        <FormGroup
                            type="file"
                            handleChange={this.handleImageChange}
                            label="Change Image"
                        />
                        <div className='editprofile-wrapper'>
                            <form onSubmit={this.handleSubmit}>
                                <FormGroup
                                label='interest'
                                type='text'
                                handleChange={this.handleChange}
                                value={this.state.interest}
                                name="interest"
                                required={true}
                                />  
                                <button 
                                    style={{color: 'white', backgroundColor: 'slategrey', padding: '0.5rem 1.2rem', width: '100%' }}
                                    hidden={!this.state.interest || this.props.isLoading}
                                    >Update Profile
                                    </button>
                                    {this.props.isLoading &&  <Loader />}
                          </form>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        borderRadius: '20px',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


export default EditProfile
