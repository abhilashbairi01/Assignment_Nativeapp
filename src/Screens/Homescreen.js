import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Custominput from '../Components/Custominput';
// import { Icon } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const Homescreen = () => {
  const [text, setText] = useState();
  const [array, setArray] = useState(['Apple', 'banana', 'icecream','abhi','aask']);
  const [filtered, setFiltered] = useState(array);
  // const [searching, setSearching] = useState(false);

  const add = () => {
    setArray([...array, text]);
  };
  const Search = txt => {
    setText(txt);
    let array = filtered;
    let searchdata = array.filter(item => {
      return item.toLowerCase().includes(txt.toLowerCase());
    });
    setFiltered(searchdata);
  };
 
  return (
    <ScrollView nestedScrollEnabled={true} style={{width: '100%'}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Custominput
          placeholder={'Enter the text here..!'}
          setValue={txt => {
            Search(txt);
          }}
        />

        <TouchableOpacity onPress={add}>
          <Icon name="plus" size={50} color="#4F8EF7" style={styles.icon} />
        </TouchableOpacity>
      </View>
      
      {
        filtered.map((item, index) =>{
          return (
            <View key={index}>
              <Text style={{textAlign: 'center'}}>{item}</Text>
            </View>
            )
        })
      }

      <View>
        {array.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.element}>{item}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: 10,
  },
  element: {
    textAlign: 'left',
    fontSize: 25,
    marginTop: 5,
    marginLeft: 30,
  },
});

export default Homescreen;
