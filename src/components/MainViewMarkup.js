import React, { PropTypes } from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';

class MainViewMarkup extends React.Component {
  scrollToBottom(contentWidth, contentHeight) {
    console.log('scroll to bottom??');
    console.log(this);
    this.refs['scroll'].scrollTo({ y: contentHeight });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Application</Text>
        <ScrollView
          style={styles.scroll}
          onContentSizeChange={this.scrollToBottom.bind(this)}
          ref="scroll"
        >
          {this.props.text.map((textLine, index) => (
            <Text key={index}>{textLine}</Text>
          ))}
        </ScrollView>
        <View style={styles.buttonwrap}>
          <Button
            style={{ flex: 1 }}
            color="#222222"
            margin={10}
            title="Do The Thing"
            onPress={this.props.addBodyText}
          />
          <Button
            style={{ flex: 1 }}
            color="#222222"
            margin={10}
            title="Undo The Thing"
            onPress={this.props.removeBodyText}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'stretch' },
  title: { fontSize: 36, textAlign: 'center', margin: 10 },
  scroll: { flex: 1, margin: 10 },
  buttonwrap: { justifyContent: 'space-around', flexDirection: 'row' },
});

export default MainViewMarkup;
