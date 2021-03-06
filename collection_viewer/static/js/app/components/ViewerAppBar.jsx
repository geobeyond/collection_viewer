import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import React from 'react';


export default class ViewerAppBar extends React.Component{
  componentWillMount() {
    this.setState({
      'activeTab': this.props.page
    });
  }
  onChange(value) {
    window.location = value;
  }
  render() {
    const appBarMenu = (
      <Tabs inkBarStyle={{ 'backgroundColor': 'rgba(23, 52, 78, 1)'}} className={'appBarMenu'} value={this.state.activeTab}
          onChange={this.onChange}>
        <Tab label='Collections' value={'viewer'} className={'appBarTab'} href='/geocollections/viewer'>
        </Tab>
        <Tab label='Map Composer' value={'composer'} className={'appBarTab'} href='/geocollections/composer'>
        </Tab>
        <Tab label='Maps' value={'maps'} className={'appBarTab'} href='/geocollections/maps'>
        </Tab>
        <Tab label='GeoNode' value={'/'} className={'appBarTab'} href='/'>
        </Tab>
      </Tabs>
    );
    return (
      <AppBar className={'appBar'}
          title='Collection Viewer'
          onTitleTouchTap={() => window.location = '/geocollections/viewer'}
          onLeftIconButtonTouchTap={this.props.toggleSidebar}
          showMenuIconButton={true}
          children={appBarMenu} />
    );
  }
}


ViewerAppBar.propTypes = {
  /**
   * i18n message strings. Provided through the application through context.
   */
  page: React.PropTypes.string
};

ViewerAppBar.defaultProps = {
  page: undefined
};
