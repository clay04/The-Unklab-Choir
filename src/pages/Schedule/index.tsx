import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Gap, Header} from '../../components';

const Schedule = ({navigation}) => {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#530303', '#000000', '#000000']}
          style={styles.gradient}>
          <Header label="Schedule" backButton={true} onPress={() => navigation.navigate('Menu')}/>
          <View style={styles.containerWrapper}>
        <View style={styles.calendarContainer}>
          <Text style={styles.monthText}>May</Text>
          <Gap height={8}/>
  
          <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
  
          <View style={styles.daysSunday}>
            <Text style={styles.Text}>sunday</Text>
            <Text style={[styles.dayText, styles.otherday]}>28</Text>
            <Text style={styles.dayText}>5</Text>
            <Text style={styles.dayText}>12</Text>
            <Text style={styles.dayText}>19</Text>
            <Text style={styles.dayText}>26</Text>
          </View>
          <View style={styles.daysMonday}>
            <Text style={styles.Text}>monday</Text>
            <Text style={[styles.dayText, styles.otherday]}>29</Text>
            <Text style={styles.dayText}>6</Text>
            <Text style={styles.dayText}>13</Text>
            <Text style={styles.dayText}>20</Text>
            <Text style={styles.dayText}>27</Text>
          </View>
          <View style={styles.daysTuesday}>
            <Text style={styles.Text}>tuesday</Text>
            <Text style={[styles.dayText, styles.otherday]}>30</Text>
            <Text style={styles.dayText}>7</Text>
            <Text style={styles.dayText}>14</Text>
            <Text style={styles.dayText}>21</Text>
            <Text style={styles.dayText}>28</Text>
          </View>
          <View style={styles.daysWednesday}>
            <Text style={styles.Text}>wednesday</Text>
            <Text style={styles.dayText}>1</Text>
            <Text style={styles.dayText}>8</Text>
            <Text style={styles.dayText}>15</Text>
            <Text style={styles.dayText}>22</Text>
            <Text style={styles.dayText}>29</Text>
          </View>
          <View style={styles.daysThursday}>
            <Text style={styles.Text}>thursday</Text>
            <Text style={styles.dayText}>2</Text>
            <Text style={styles.dayText}>9</Text>
            <Text style={styles.dayText}>16</Text>
            <Text style={styles.dayText}>23</Text>
            <Text style={styles.dayText}>30</Text>
          </View>
          <View style={styles.daysFriday}>
            <Text style={styles.Text}>friday</Text>
            <Text style={styles.dayText}>3</Text>
            <Text style={styles.dayText}>10</Text>
            <Text style={styles.dayText}>17</Text>
            <Text style={styles.dayText}>24</Text>
            <Text style={styles.dayText}>31</Text>
          </View>
          <View style={styles.daysSaturday}>
            <Text style={styles.Text}>saturday</Text>
            <Text style={styles.dayText}>4</Text>
            <Text style={styles.dayText}>11</Text>
            <Text style={[styles.dayText, styles.highlightedDay]}>18</Text>
            <Text style={styles.dayText}>25</Text>
            <Text style={[styles.dayText, styles.otherday]}>1</Text>
          </View>
          </View>
          </View>
  
        <View style={styles.eventContainer}>
          <Text style={styles.eventTitle}>9:00 AM - 11:30 AM</Text>
          <Text style={styles.eventDescription}>Sabbath Service at Pioneer Chapel</Text>
        </View>
        <View style={styles.eventContainer}>
          <Text style={styles.eventTitle}>3:00 PM - 5:30 PM</Text>
          <Text style={styles.eventDescription}>Regular Choir Practice</Text>
        </View>
        <View style={styles.eventContainer}>
          <Text style={styles.eventTitle}>5:30 PM - 6:00 PM</Text>
          <Text style={styles.eventDescription}>Sundown Worship (Closing Sabbath)</Text>
        </View>
        </View>
      </LinearGradient>
      </View>
    );
  };
  
  export default Schedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  containerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: 352,
    height: 335,
  }, 
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: 'black',
  },
  daysSunday: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  daysMonday: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  daysTuesday: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  daysWednesday: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  daysThursday: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  daysFriday: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  daysSaturday: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  daysContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  Text: {
    fontSize: 10,
    color: 'black',
    marginBottom: 13,
  },
  dayText: {
    fontSize: 20,
    color: 'black',
    marginBottom: 13,
  },
  otherday: {
    fontSize: 20,
    color: '#C4BFBF',
    marginBottom: 13,
  },
  highlightedDay: {
    fontWeight: 'bold',
    color: 'red',
  },
  eventContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: 352,
    height: 74,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'right',
  },

  eventDescription: {
    fontSize: 14,
    color: 'black',
    textAlign: 'right',
  },

});