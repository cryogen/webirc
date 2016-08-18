class MainWindow extends React.Component {
    render() {
        return(
            <div>
                <ChannelList channels={ this.props.channels } />
                <TextWindow messages={ this.props.messages } />
                <footer className='footer'>
                    <CommandBar onCommand={ this.props.onCommand }/>
                </footer>
            </div>);
    }
}

MainWindow.displayName = 'MainWindow';
MainWindow.propTypes = {
    messages: React.PropTypes.array,
    channels: React.PropTypes.array,
    onCommand: React.PropTypes.func
};