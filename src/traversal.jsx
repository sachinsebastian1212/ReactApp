import React, { Component } from 'react';
import data from './test.json';

var objectivesRetrieved = [{ "desc": "desc1", "val": "ob_77" }, { "desc": "desc2", "val": "ob_78" },
{ "desc": "desc3", "val": "ob_79" }, { "desc": "desc4", "val": "ob_80" }];


class QuestForm extends Component {

  render() {
    let nodes = data.map(function (arrelem) {
      return (
        <Node node={arrelem} children={arrelem.children} />
      );

    });

    return (
      <ol>
        {nodes}
      </ol>
    );
  }
}

class Node extends Component {

  render() {

    let childnodes = null;

    if (this.props.children) {
      childnodes = this.props.children.map(function (childnode) {
        return (
          <Node node={childnode} children={childnode.children} />
        );
      })
    }

    return (
      <li>
        <span>{this.props.node.type}</span>
        <ol data-nodetype={this.props.node.type}>
          <NodeElements data={this.props.node} />
          {childnodes}
        </ol>
      </li>
    );
  }
}


export default QuestForm;

// ref http://lyndseyb.co.uk/posts/creating-a-nested-listview-using-react


class NodeElements extends Component {
  render() {

    switch (this.props.data.type) {
      case "objective":
        return (
          <li>
            <label htmlFor="">Select objective</label>
            <select>
            {objectivesRetrieved.map((obj) => <option value={obj.val}>{obj.desc}</option>)}
            </select>
          </li>
        );

        break;
      case "objectivelist":

        break;

      case "quest":

        break;

      case "questset":

        break;

      default:
        break;
    }

    return (
      <ol data-nodetype={this.props.type}>

      </ol>
    );
  }
}
