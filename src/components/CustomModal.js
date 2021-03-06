import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react';

class CustomModal extends Component {
  render() {
    const { title, header, image, description, actionText, icon, iconAction, item, iconColor } = this.props;
    return (
      <div>
        <Modal
          onClose={() => this.props.changeModalState()}
          onOpen={() => this.props.changeModalState()}
          open={this.props.isModalOpen}
        >
          <Modal.Header>
            {title}
            {icon && <div style={{ float: 'right', cursor: 'pointer' }} onClick={() => { iconAction(item) }}>
              <Icon color={iconColor} name={icon} />
            </div>}
          </Modal.Header>
          <Modal.Content image>
            {image && <Image size='medium' src={image} wrapped />}
            <Modal.Description>
              <Header>{header}</Header>
              <p>{description}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => this.props.changeModalState()}>
              {actionText}
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default CustomModal;
