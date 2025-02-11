import React, { Component } from "react";
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import { Alert, Modal, Pressable } from "react-native";
import Carousel from 'react-native-snap-carousel';

class Pots extends Component {

    state = {
        index:0,
        activeIndex:0,
        carouselItems: [
            {
                title:"Item 1",
            },
            {
                title:"Item 2",
            },
            {
                title:"Item 3",
            },
            {
                title:"Item 4",
            },
            {
                title:"Item 5",
            },
            {
                title:"Item 6",
            },
            {
                title:"Item 7",
            },

          ],
        modalVisible: false,
        plants: [{
            id: 0,
            name: 'Sunflower',
            heights: [2, 2.1, 2.3, 2.3, 2.4, null, null]
        },
        {
            id: 2,
            name: 'Mayflower',
            heights: [2, 2.1, 2.3, 2.3, 2.4, null, null]
        }]
    };


    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 250,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>
        )
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const {modalVisible} = this.state;
        return (
            <ScrollView contentContainerStyle={styles.container}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!modalVisible);
                    }}
                    >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                        <SafeAreaView style={{flex: 1, backgroundColor:'transparent', paddingTop: 50 }}>
                          <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                              <Carousel
                                layout={"default"}
                                ref={ref => this.carousel = ref}
                                data={this.state.carouselItems}
                                sliderWidth={300}
                                itemWidth={300}
                                renderItem={this._renderItem}
                                onSnapToItem = { index => this.setState({activeIndex:index}) } />
                          </View>
                        </SafeAreaView>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                        </View>
                    </View>
                </Modal>

                <View style={styles.topContainer}>
                    <Text style={{color: '#000000', fontSize: 45, fontWeight: 'bold'}}>
                        My{' '}
                        <Text style={{color: '#669850'}}>
                            Garden
                        </Text>
                    </Text>
                </View>
                {this.state.plants.map((plantInfo) =>
                    <TouchableOpacity
                        key={plantInfo.id}
                        onPress={() => this.setModalVisible(true)}
                        style={styles.pot}
                        underlayColor='#d4f0c7'
                    >
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Pot {plantInfo.id+1} and {plantInfo.id+2}</Text>
                        <View style={{alignItems: 'center'}}>
                            <Image
                                source={require('../assets/pot-icon.png')}
                                style={{width: 175, height: 175}}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={{
                            backgroundColor: '#ffffff',
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: '#ffffff',
                            alignItems: 'center',
                            padding: 3
                        }}>
                            <Text style={{fontSize: 15}}>{plantInfo.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    topContainer: {
        marginVertical: 25,
        width: '90%'
    },
    pot: {
        flex: 1,
        height: 300,
        backgroundColor: '#e1eed3',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ffffff',
        padding: 20,
        margin: 5
    },
    potRow: {
        width: '95%',
        display: 'flex',
        flexDirection: 'row'
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        height: 400,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"

}})

export default Pots;
