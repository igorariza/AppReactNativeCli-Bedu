import React, {useState} from 'react';
import {Card, Button} from 'react-native-elements';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import moment from 'moment';
import Close from '../../../src/components/Close';
const tempImg = [
  'https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159497/school-notebook-binders-notepad-159497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159497/school-notebook-binders-notepad-159497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
];

function ProductDetail(props) {
  console.log('props prduct detail', props);
  moment.locale('en');
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView>
      <View>
        <Modal style={styles.modalbox} isVisible={isModalVisible}>
          <Close style={styles.closemodal} onPress={toggleModal} />
          <View style={styles.containermodal}>
            <Text style={styles.title}>{props.nameSecction}</Text>
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Escribe lo que necesites..."
                placeholderTextColor="black"
                numberOfLines={10}
                multiline={true}
              />
            </View>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
        <Card containerStyle={{borderRadius: 10}}>
          <View style={styles.midlecard}>
            <Image
              style={styles.cover}
              source={{
                uri: tempImg[Math.floor(Math.random() * 20)],
              }}
            />
            <View style={styles.info}>
              <Text style={styles.title}>name Section</Text>
              {/* {props.nameSecction} */}
              <Text style={styles.title}>
                {/* Asignación: {moment(props.uploadOnSecction).format('MMMM DD')} */}
                Asignación:
              </Text>
            </View>
          </View>
          <Text style={styles.title}> descriptionSecction</Text>
          {/* {props.descriptionSecction}</Text> */}
          <TouchableOpacity onPress={toggleModal} style={styles.button}>
            <Text style={styles.buttonLabel}>Hacer Entrega</Text>
          </TouchableOpacity>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  midlecard: {
    flexDirection: 'row',
  },
  closemodal: {
    marginTop: 45,
  },
  containermodal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalbox: {
    backgroundColor: '#99c84a',
    marginTop: 100,
    marginBottom: 100,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#99c84a',
    borderRadius: 5,
    marginTop: 20,
  },
  info: {
    width: 0,
    flexGrow: 1,
  },
  card: {
    borderRadius: 50,
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 20,
  },
  cover: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  buttonLabel: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textAreaContainer: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: 'flex-start',
  },
});

export default ProductDetail;
