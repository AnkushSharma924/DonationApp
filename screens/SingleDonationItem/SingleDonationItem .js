import React from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, ScrollView, Image, View, Text} from 'react-native';
import style from './style';
import BackButton from '../../components/BackButton/BackButton';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Badge from '../../components/Badge/Badge';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categoryInformation = route.params.categoryInformation;

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: donationItemInformation.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationItemInformation.name} />
        <Text style={style.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button
          onPress={() => {
            navigation.navigate(Routes.Payment);
          }}
          title={'Donate'}
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
