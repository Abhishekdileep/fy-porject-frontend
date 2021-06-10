import React,{Component} from 'react'
import {Modal,View,Text,TouchableOpacity,FlatList,SafeAreaView,ScrollView} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import styles from '../styles'

const LOADING_RECORDS = "LOADING"
const NO_RECORDS = "EMPTY"
const RECORDS_LOADED = "RECORDS_LOADED"

const recordContent = (visible,record,closeModal) => <Modal transparent={true} visible={visible}>
  <View style={styles.recordModal}>
    <View style={{flexDirection:"row",justifyContent:"space-between",padding:8,borderBottomWidth:1,borderBottomColor:"#dee1e4"}}>
      <Text style={{fontWeight:"bold",color:"rgb(28,30,33)",fontSize: 16}}>Full text</Text>
      <TouchableOpacity onPress={closeModal}>
        <Ionicons name="close-circle" color="black" size={18} />
      </TouchableOpacity>
    </View>
    <ScrollView style={{margin: 8}}>
      <Text>
        {record.text ? record.text : ""}
      </Text>
    </ScrollView>
  </View>
</Modal>

class Records extends Component{
  state = {
    loadingStatus: LOADING_RECORDS,
    records:[],
    recordModalVisible: false,
    record: {}
  }

  renderModal = (record) => {
    this.setState({recordModalVisible:true,record}) 
  }

  closeModal = () => {
    this.setState({recordModalVisible:false,record:{}}) 
  }

  renderItem = ({item}) => <TouchableOpacity onPress={() => this.renderModal(item)}>
    <View style={styles.recordItem}>
      <Text style={styles.recordTitle}  numberOfLines={1}>{item.text}</Text>
    </View>  
  </TouchableOpacity> 

  renderEmptyList = () => <View>
    <Text>No records available, scan few images and come back</Text>
  </View>

  renderRecords = () => <FlatList
    data={this.state.records}
    renderItem={this.renderItem}
    keyExtractor={item => item.id}
    ListEmptyComponent={this.renderEmptyList()}
  />

  componentDidMount(){
    fetch("http://192.168.43.237:3000/api/packets/all")
    .then(data => data.json())
    .then(records => {
      records = records.map(record => {
        record.text = record.text.join(" ")
        return record
      })
      if(records.length>0){
        this.setState({records,loadingStatus:RECORDS_LOADED})
      }
    })
    .catch(err => console.log(err))
  }

  render(){

    return <Modal visible={this.props.isVisible}>
      {recordContent(this.state.recordModalVisible,this.state.record,this.closeModal)}
      <View style={styles.recordContainer}>
        <View style={{padding:16,backgroundColor:"#21af7c"}}>
          <Text style={{color:"#fff",fontSize:20,fontWeight:"bold"}}>Scanned records</Text>
        </View>
        <SafeAreaView style={{backgroundColor:"#f3f4f6",flex:1}}>
          {
            this.state.loadingStatus === LOADING_RECORDS ?
            <View style={{alignSelf:"center",flex:1,padding:32}}>
              <Text style={{fontWeight:"bold",color:"#696969"}}>Please wait...</Text>
            </View> : 
            this.renderRecords()
          }
          
        </SafeAreaView>
        <TouchableOpacity style={styles.fixedModalButton} onPress={this.props.toggleRecordsVisibility}>
          <Text style={styles.closeModalButton}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  }
}

export default Records