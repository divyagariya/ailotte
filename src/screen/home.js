import React, {useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from "react-native-text-gradient";
import * as Typography from '../utility/typography'
import styles from '../style/home';
import {feeds} from '../data';


export default () => {
  const [showMore, setShowMore] = useState(false);
  const [show, setShow] = useState(0);
  const [selectedLike, setSelectedLike] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={styles.headerTxt}>act</Text> */}
        <LinearTextGradient
            style={styles.headerTxt}
            locations={[0.60, 1]}
            colors={["#00ff7f", "blue"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            >
            <Text>act</Text>
        </LinearTextGradient>
      </View>
      <View>
        <FlatList
          data={feeds}
          ListFooterComponent={() => <View style={styles.listFooterStyle} />}
          renderItem={({item, index}) => {
            return (
              <View style={styles.cardContainer}>
                <Icon
                  name="ios-ellipsis-horizontal"
                  style={styles.iconStyle1}
                  size={20}
                />
                <View style={styles.profileDetails}>
                  <Image
                    source={{uri: item?.u_img}}
                    style={styles.dpStyle}
                    resizeMode="cover"
                  />
                  <View style={{paddingLeft: 10, justifyContent: 'center'}}>
                    <Text style={styles.txtStyle}>{item.u_name}</Text>
                    <Text style={styles.txtStyle1}>
                      {item.u_id} <Text> 20m</Text>
                    </Text>
                  </View>
                </View>
                <Text style={styles.txtStyle1} 
                    numberOfLines={show !== item.id  ? 2 : 4}
                >
                  {item.u_des}
                </Text>
                <Text
                  style={styles.txtStyle1}
                  numberOfLines={2}
                  onPress={() => {
                    show == item.id ? setShow(0) :
                    setShow(item.id)
                     }}
                >
                  {show !== item.id  ? `see more` : `see less`}
                </Text>
                {item.id == 2 ? (
                  <>
                    <Image
                      source={{uri: item.n_img}}
                      style={styles.nImgStyle}
                      resizeMode="contain"
                    />
                    <Text style={styles.txtStyle1}>React on</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={{flex: 0.3}}>
                        <Image
                          source={{uri: item.news}}
                          style={[styles.newsImgStyle]}
                          resizeMode="contain"
                        />
                      </View>
                      <View style={{flex: 0.7}}>
                        <Text style={[styles.txtStyle1]} 
                             numberOfLines={show !== item.id  ? 3 : 5}
                        >
                          {item.u_des}
                        </Text>
                        <Text
                            style={styles.txtStyle1}
                            numberOfLines={2}
                            onPress={() => {
                                show == item.id ? setShow(0) :
                                setShow(item.id)
                               }}
                            >
                            {show !== item.id  ? `see more` : `see less`}
                            </Text>
                      </View>
                    </View>
                  </>
                ) : null}
                {item.id == 3 ? (
                  <>
                    <Text style={styles.txtStyle1}>React on</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={{flex: 0.3}}>
                        <Image
                          source={{uri: item.news}}
                          style={[styles.newsImgStyle]}
                          resizeMode="contain"
                        />
                      </View>
                      <View style={{flex: 0.7}}>
                        <Text style={[styles.txtStyle1]} 
                       numberOfLines={show !== item.id  ? 3 : 5}
                        >
                          {item.u_des}
                        </Text>
                        <Text
                            style={styles.txtStyle1}
                            numberOfLines={2}
                            onPress={() => {
                                show == item.id ? setShow(0) :
                                setShow(item.id)
                               }}
                            >
                            {show !== item.id ? `see more` : `see less`}
                            </Text>
                      </View>
                    </View>
                  </>
                ) : null}

                <View style={styles.footer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      alignItems:'center'
                    }}>
                    <Icon
                      name="ios-heart"
                      style={[
                        styles.iconStyle,
                        {
                          color: selectedLike == item.id ? 'red' : 'white',
                        },
                      ]}
                      size={Typography.FONT_SIZE_20}
                      onPress={() => setSelectedLike(...[item.id])}
                      color="red"
                    />
                    <Text style={styles.txtStyle1}>75</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'center',
                      alignItems:'center'
                    }}>
                    <LinearGradient 
                        colors={['#7fff00', '#00ff7f', '#192f6a']} 
                        style={styles.mIconContainer}
                        start={{ x: 0, y: 1 }} end={{ x: 1, y:0}}
                    >
                        <Icon
                        name="ios-arrow-undo"
                        style={[styles.MiconStyle,{
                          color:'black'
                            
                        }]}
                        size={Typography.FONT_SIZE_20}
                        />
                    </LinearGradient>
                    <Text style={styles.txtStyle1}>50 reacted</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'flex-end',
                      alignItems:'center'
                    }}>
                    <Icon
                      name="ios-share-social"
                      style={styles.iconStyle}
                      size={20}
                    />
                    <Text style={styles.txtStyle1}>120</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
