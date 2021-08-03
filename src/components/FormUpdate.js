import React, { Component } from 'react'

 class FormUpdate extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.updatefun} >
                    <input type="text" name="title"defaultValue={this.props.title}/>
                    <input type="text" name="imageUrl"defaultValue={this.props.imageUrl}/>
                    <input type="submit" value="Update"/>
                </form>
            </div>
        )
    }
}

export default FormUpdate
