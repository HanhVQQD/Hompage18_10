
import React from 'react';
import { View } from 'react-native';
import Banner from './Banner';
import DiabeticDiet from './DiabeticDiet';

const Homepage = () => {
  return (
    <View>
      <Banner/>
      <View>
        <DiabeticDiet/>
      </View>
    </View>
    
  );
}
export default Homepage;