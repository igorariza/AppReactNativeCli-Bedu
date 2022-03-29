import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {FlatList} from 'react-native';
import Empty from '../../components/Empty';
import Product from '../components/product';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import Separator from '../../components/vertical-separator';
import {useNavigation} from '@react-navigation/native';
import Layout from '../../components/ProducListLayout';
import {createServer} from 'miragejs';

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/products', () => {
      return {
        products: [
          {id: 1, name: 'Inception', year: 2010, description: 'Lorem ipsum'},
          {id: 2, name: 'Interstellar', year: 2014, description: 'Lorem ipsum'},
          {id: 3, name: 'Dunkirk', year: 2017, description: 'Lorem ipsum'},
          {
            id: 4,
            name: 'The Dark Knight',
            year: 2008,
            description: 'Lorem ipsum',
          },
        ],
      };
    });
  },
});

const ProductList = props => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(json => setProducts(json.products));
  }, []);

  // const getProducts = async id => {
  //   fetch(
  //     `https://api-gcp.sige-edu.com:8000/api/courses/academiccharge/bystudent/${codeStudent}`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     },
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       setProducts(data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  //     .finally(() => {});
  // };
  // useEffect(() => {
  //   loginSucess();
  // }, []);
  const itemSeparator = () => <Separator />;
  const keyExtractor = item => item.id.toString();
  const renderEmpty = () => <Empty text="No hay sugerencias" />;
  const viewProduct = item => {
    navigation.navigate('Details', {
      item: item,
    });
  };
  const renderItem = ({item}) => {
    return (
      <Product
        product={item}
        onPress={() => viewProduct(item)}
        onLongPress={() => viewProduct(item)}
      />
    );
  };
  return (
    <Layout>
      <FlatList
        data={products}
        ItemSeparatorComponent={itemSeparator}
        ListEmptyComponent={renderEmpty}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </Layout>
  );
};

export default ProductList;
