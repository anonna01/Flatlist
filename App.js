
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

export default function App() {
  const courses = [
    {
      id:1,
      name:'DB management'
    },
    {
      id:2,
      name: 'Micro-processor'
    },
    {
      id:3,
      name: 'Electronics'
    },
    {
      id: 4,
      name: 'Mobile app development'
    },
    {
      id: 5,
      name: 'Mobile app development (Flutter)'
    },
    {
      id: 6,
      name: 'Web Development'
    },
    {
      id: 7,
      name: 'Management Information System'
    },
    {
      id: 8,
      name: 'Assembly Language'
    },
    {
      id: 9,
      name: 'Physics'
    }
  ]
  const onecourse = ({item})=>(
    <View style= {styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  )

  const listHeader = () => 
  {
    return <Text style={styles.headerText}>Courses</Text>
  }

  const itemSeparator = () => {
    return <View style={styles.separator}/>
  
  }
  
  return (
    <SafeAreaView>
     <FlatList
     ListHeaderComponentStyle={styles.listHeader}
     ListHeaderComponent={listHeader}
     data={courses}
     renderItem= {onecourse}
     ItemSeparatorComponent = { itemSeparator }
     ListEmptyComponent = {<Text>This is a flat list</Text>}
    
     />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  
  {
    
    listHeader:{
      marginTop: 100,
 height: 55,
 alignItems: 'center',

 justifyContent: 'center',
 
    },
    headerText:{
      fontWeight: '600',
      fontSize: 26,
      color: '#028bc9'
    },
    item:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 13,
      
    },
    name:{
      fontWeight: '600',
      fontSize: 20,
      marginLeft: 13,
  
    },
 separator: {
  color: '#000000',
  height:1,
  width: '100%',
  backgroundColor: '#ccc'
 }
});
