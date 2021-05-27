import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible'
import Accordion from 'react-native-collapsible/Accordion'

const MOCK = [
  {
    id: '0',
    tag: 'food',
    time: '2021-01-27',
    dayNum: '1',
    totalDayNum: '5',
    discount: '0.1',
    tax: '+0.1',
    caption: '測試用的文字',
    JPY_num: '5150',
    NTD_num: '1421.4',
    isAddImage: true,
    isSelected: false,
  },
  {
    id: '1',
    tag: 'shipping',
    time: '2021-01-28',
    dayNum: '2',
    totalDayNum: '5',
    discount: '0.1',
    tax: '+0.1',
    caption: '',
    JPY_num: '1312.5',
    NTD_num: '362.25',
    isAddImage: false,
    isSelected: false,
  },
  {
    id: '2',
    tag: 'transportation',
    time: '2021-01-27',
    dayNum: '1',
    totalDayNum: '5',
    discount: '0.1',
    tax: '+0.08',
    caption: '又是一段測試用的文字',
    JPY_num: '3375',
    NTD_num: '931.5',
    isAddImage: true,
    isSelected: false,
  },
  {
    id: '3',
    tag: 'wearing',
    month: '1',
    time: '2021-01-27',
    totalDayNum: '5',
    discount: '0.1',
    tax: '',
    caption: '再來一段測試用的文字',
    JPY_num: '1500',
    NTD_num: '414',
    isAddImage: true,
    isSelected: false,
  },
  {
    id: '4',
    tag: 'other',
    time: '2021-06-25',
    dayNum: '1',
    totalDayNum: '3',
    discount: '0.1',
    tax: '',
    caption: '',
    JPY_num: '4750',
    NTD_num: '1311',
    isAddImage: true,
    isSelected: false,
  },
  {
    id: '5',
    tag: 'other',
    time: '2021-06-25',
    dayNum: '1',
    totalDayNum: '3',
    discount: '0.1',
    tax: '',
    caption: '最後一段測試用的文字，我需要他非常非常非常非常非常非常非常非常非常長，長到不行，再長一點好了',
    JPY_num: '1250',
    NTD_num: '345',
    isAddImage: true,
    isSelected: false,
  }
]


export default function App() {
  const [toAccordionPage, setToAccordionPage] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeSections, setActiveSections] = useState([]);

  const RenderItem = ({ item, index }) => {

    return (
      <View style={{ width: '100%', height: 56, borderBottomWidth: 1, }}>
        <Text>{item.caption}</Text>
        <Text>{item.JPY_num}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Button title={'next'} onPress={() => { setToAccordionPage(!toAccordionPage) }} />
      <View style={{ height: 40 }} />
      {!toAccordionPage && <View style={{ width: 250 }}>

        <Text>This is a collapsible.</Text>
        <Button title={'open'} onPress={() => { setIsCollapsed(!isCollapsed) }} />
        <Collapsible
          collapsed={isCollapsed} style={{ width: 250 }}
        >
          <View style={{ width: '100%', height: 250, backgroundColor: '#e1e1e1' }}>
            <FlatList
              data={MOCK}
              renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
              keyExtractor={(_, i) => i.toString()}
              style={{ width: '100%', }}
            />
          </View>
        </Collapsible>
      </View>
      }
      {toAccordionPage &&
        <View style={{ width: 250 }}>
          <Text>This is an accordion.</Text>
          <Accordion
            sections={MOCK}
            activeSections={activeSections}
            renderSectionTitle={(i, j, k, l) => { return (<Text style={{ marginTop: 8 }}>{j + 1}</Text>) }}
            renderHeader={() => (<View style={{ width: 250, height: 40, backgroundColor: 'gray', }}></View>)}
            renderContent={() => (<View style={{ width: 250, height: 100, backgroundColor: '#fff', borderWidth: 1, }}></View>)}
            onChange={(activeSectionArray) => { setActiveSections(activeSectionArray) }}
            touchableComponent={TouchableOpacity}
          />
        </View>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 150,
  },
});
