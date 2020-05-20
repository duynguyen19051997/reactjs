import React from 'react';

// Component ListItem
const ListItem = (props) => {
  return <li value={props.key}>{props.value}</li>
}

// Component List
class List extends React.Component {
  constructor(props) {
    super(props);

    // convert array animal into listItem
    this.listItem = props.animals.map(
      (animal, index) => <ListItem key={index} value={index.toString() + "-" + animal} />
    );
  }

  render() {
    return (
      <div>
        <ul>
          {this.listItem}
        </ul>
      </div>
    );
  }

}

export default List;
