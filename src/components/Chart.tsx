import React from 'react';
import {Dimensions, View} from 'react-native';
import Text from './Text';
import {ProgressChart} from 'react-native-chart-kit';

function Chart({Rank}) {

  // each value represents a goal ring in Progress chart
  const data = {
    labels: ['Chalange', 'Badges', 'Pray'], // optional
    data: [0.6, 0.5, Rank*0.2],
  };
  const chartConfig = {
    backgroundGradientFrom: '#E9ECEF',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#E9ECEF',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 0.5) => `rgb(58, 65, 111, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View style={{margin: 5}}>
      <Text size={16} center={true} p secondary={true} semibold={true}>
        Daily Pray progress
      </Text>
      <View>
      <ProgressChart
        data={data}
        width={Dimensions.get('window').width - 65}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
      </View>
    </View>
  );
}

export default Chart;
