    //const modalObj = JSON.parse(localStorage)
    const navBarObj = JSON.parse(localStorage.getItem('navBarObj'));
    this.setState({navBarObj});
    const collapsePanelObj = JSON.parse(localStorage.getItem('collapsePanelObj'));
    this.setState({collapsePanelObj});
    const centerPanelWithRows = JSON.parse(localStorage.getItem('centerPanelWithRows'));
    this.setState({centerPanelWithRows});
    const linksPanel = JSON.parse(localStorage.getItem('linksPanel'));
    this.setState({linksPanel});
    const table = JSON.parse(localStorage.getItem('table'));
    this.setState({table});
    const panel = JSON.parse(localStorage.getItem('panel'));
    this.setState({panel});
    const headerAndDescription = JSON.parse(localStorage.getItem('headerAndDescription'));
    this.setState({headerAndDescription});
    const modalButtonObj = JSON.parse(localStorage.getItem('modalButtonObj'));
    this.setState({modalButtonObj});
    alert({this.state.modalButtonObj});
    const headerObj = JSON.parse(localStorage.getItem('headerObj'));
    this.setState({headerObj});
    console.log(this.state.headerObj);
    const others = JSON.parse(localStorage.getItem('others'));
    this.setState({others});
    const comments = JSON.parse(localStorage.getItem('comments'));
    this.setState({comments});
    const modalObj = JSON.parse(localStorage.getItem('modalObj'));
    this.setState({modalObj});



}

  render() {
    return (
      <div>
          {/*creates the navbar */}
          {this.state && this.state.navBarObj && this.state.navBarObj.list && 
            this.state.navBarObj.titlePath && <div> {createNavBar(this.state.navBarObj)} </div>}
          <div className="container">
            <div id="Dynamic_Screen">
              <div className="container">
              {/*creates a panel with links*/}
                {this.state && this.state.linksPanelObj && this.state.linksPanelObj.linkList
                  && <div>{linksPanel(this.state.linksPanelObj)}</div>}
{/*creates the header and description */}
                {this.state && this.state.header && <div> {headerAndDescription(this.state.headerAndDescription)} </div>}
                {/*creates a button for a modal */}
                {this.state && this.state.modalButton && <div> {modalButton(this.state.modalButtonObj)} </div>}
                <br/><br/>
                {/*creates multiple panels*/}
                {this.state && this.state.createPanels && <div> {createPanels(this.state.comments)} <div>}
                {/*creates a panel with a collapsable dropdown */}
                {this.state && this.state.collapsePanelObj && this.state.collapsePanelObj.inputArray
                  && <div> {collapsePanel(this.state.collapsePanelObj)} </div>}
                {/*creates a panel with rows */}
                {this.state && this.state.centerPanelWithRowsObj && this.state.centerPanelWithRowsObj.body &&
                 <div> {centerPanelWithRows(this.state.centerPanelWithRowsObj)}</div>}
                {/*creates a centered panel*/}
                {this.state && this.state.centerPanel && <div>{centerPanel(this.state.centerPanel)}</div>}
                {/*creates a table object*/}
                {this.state && this.state.tableObj && this.state.tableObj.header &&
                  this.state.tableObj.body && <div>{table(this.state.tableObj)}</div>}
                {/*creates a basic modal*/}
                {this.state && this.state.modalObj && this.state.modalObj.inputArray
                 && <div>{basicModal(this.state.modalObj)}</div>}
              </div>
            </div>
          </div>
      </div>
    );
  }
}