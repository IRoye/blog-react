import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'content-header::after': {
    'content': '''',
    'height': [{ 'unit': 'px', 'value': 2 }],
    'display': 'block',
    'backgroundColor': '#009688',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'auto' }]
  }
});
