import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Custom Components
const TaskItem = ({ task, image }) => (
  <View style={styles.taskItem}>
    <Image source={image} style={styles.taskImage} />
    <Text style={styles.taskText}>{task}</Text>
  </View>
);

const TaskList = ({ tasks }) => (
  <FlatList
    data={tasks}
    renderItem={({ item }) => <TaskItem task={item.task} image={item.image} />}
    keyExtractor={(item, index) => index.toString()}
  />
);

const Category = ({ name, icon, subtitle }) => (
  <View style={styles.categoryCard}>
    <Image source={icon} style={styles.categoryIcon} />
    <Text style={styles.categoryTitle}>{name}</Text>
    <Text style={styles.categorySubtitle}>{subtitle}</Text>
  </View>
);

const categories = [
  { name: 'Exercise', icon: require('./assets/exercising2.jpg'), subtitle: 'Stay Fit' },
  { name: 'Study', icon: require('./assets/study.png'), subtitle: 'Gain Knowledge' },
  { name: 'Code', icon: require('./assets/coding.png'), subtitle: 'Build Projects' },
  { name: 'Cook', icon: require('./assets/cooking.jpg'), subtitle: 'Make Delicious Food' },
  { name: 'Shop', icon: require('./assets/shopping.jpg'), subtitle: 'Get Essentials' },
  { name: 'Exercise', icon: require('./assets/exercising1.jpg'), subtitle: 'Explore Stories' },
  { name: 'Read', icon: require('./assets/reading.jpg'), subtitle: 'Gaining Knowledge' },
  { name: 'Watch movie', icon: require('./assets/movie.jpg'), subtitle: 'Unwind and Chill' },
  { name: 'Play', icon: require('./assets/playing.jpg'), subtitle: 'Release some stress' },
];

const initialTasks = [
  { task: 'Morning jog', image: require('./assets/exercising1.jpg') },
  { task: 'Study React Native', image: require('./assets/study.png') },
  { task: 'Finish coding project', image: require('./assets/coding.png') },
  { task: 'Prepare dinner', image: require('./assets/cooking.jpg') },
  { task: 'Buy groceries', image: require('./assets/shopping.jpg') },
  { task: 'Read a book', image: require('./assets/reading.jpg') },
  { task: 'Write a blog post', image: require('./assets/reading.jpg') },
  { task: 'Meditate', image: require('./assets/exercising1.jpg') },
  { task: 'Evening workout', image: require('./assets/exercising2.jpg') },
  { task: 'Review pull requests', image: require('./assets/coding.png') },
  { task: 'Plan next week’s meals', image: require('./assets/cooking.jpg') },
  { task: 'Organize workspace', image: require('./assets/exercising1.jpg') },
  { task: 'Call family', image: require('./assets/exercising2.jpg') },
  { task: 'Watch a movie', image: require('./assets/movie.jpg') },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (newTask) => {
    if (newTask) {
      setTasks((currentTasks) => [...currentTasks, newTask]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.taskCount}>15 tasks today</Text>
        </View>
        <Image source={require('./assets/person.png')} style={styles.profileImage} />
      </View>
      <View style={styles.searchBarContainer}>
        <Image source={require('./assets/search_button.jpg')} style={styles.searchIcon} />
        <TextInput style={styles.searchBar} placeholder="Search" />
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('./assets/list_icon.png')} style={styles.listButton} />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categories}>
        {categories.map((category, index) => (
          <Category key={index} name={category.name} icon={category.icon} subtitle={category.subtitle} />
        ))}
      </View>
      <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
      <TaskList tasks={tasks} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f0e8',
  },
  tasks: {
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 35,
  },
  taskCount: {
    fontSize: 14,
    color: '#666',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f7f0e8',
    backgroundColor: 'white',
    MarginTop: 80 ,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f7f0e8',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 30,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    width: 20,
    height: 20,
  },
  listButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f7f0e8',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryCard: {
    width: '30%',
    height: '30%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryIcon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  categorySubtitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  taskImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
  },
});
