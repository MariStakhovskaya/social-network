import React from 'react';
import s from './ProfileInfo.module.css'


type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true
            })
}

    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&  <div>
                    <span onDoubleClick={ this.activateEditMode }> {this.props.status}</span>
                </div>
                }

                {this.state.editMode &&  <div>
                    <input autoFocus={true} value={this.props.status} onBlur={this.deactivateEditMode}/>
                </div>
                }

            </div>
        )
    }
}

export default ProfileStatus;