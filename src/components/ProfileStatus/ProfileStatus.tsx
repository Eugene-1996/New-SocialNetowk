import React, { ChangeEvent } from 'react';


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

type StateStatus ={
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status

    }

    activateditMode = () => {
        // this.state.editMode = true
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // this.props.updateStatus(e.currentTarget.value)
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps : ProfileStatusType, prevState: StateStatus) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateditMode}>{this.props.status || 'empty'}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onChangeHandler}  value={this.state.status} />
                    </div>
                }
            </div>
        );
    }
};

export default ProfileStatus;