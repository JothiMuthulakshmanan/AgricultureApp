import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView ,TouchableOpacity} from 'react-native';

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    if (newPost.trim() !== '') {
      setPosts([...posts, newPost]);
      setNewPost('');
    }
  };

  const handleDelete = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="What's on your mind about agriculture?"
        value={newPost}
        onChangeText={text => setNewPost(text)}
      />
      <View style={{backgroundColor:"green"}}>
      <Button title="Post"  onPress={handlePost} />
      
      </View>

     
      <ScrollView style={styles.feed}>
        {posts.map((post, index) => (
          <View key={index} style={styles.post}>
            <Text >{post}</Text>
            
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  butview: {
    height:40,
    width:250,
    borderRadius:10,
    backgroundColor:'#008000',
    justifyContent:'center',
    alignItems:'center',
  },
  feed: {
    flex: 1,
    width: '100%',
  },
  post: {
    padding: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  
});