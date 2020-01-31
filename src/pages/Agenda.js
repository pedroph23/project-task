import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground , Text, FlatList } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import todayImage from '../../assets/imgs/today.jpg';
import CommonStyle from '../../src/CommonStyle.js';
import Task from '../../src/components/Task.js';

export default class Agenda extends Component {

    constructor(props) {
        super(props);
    }
    
    state = {
        tasks: [
        {
            id: Math.random(),
            desc: 'Tarefa Pedente',
            estimateAt: new Date(),
            doneAt: null
        },
        {
            id: Math.random(),
            desc: 'Tarefa Concluido',
            estimateAt: new Date(),
            doneAt: new Date()
        },
        {
            id: Math.random(),
            desc: 'Tarefa Pedente',
            estimateAt: new Date(),
            doneAt: null
        },
        {
            id: Math.random(),
            desc: 'Tarefa Concluido',
            estimateAt: new Date(),
            doneAt: new Date()
        },]
    }

    toggleTask(id) {
        alert(this.state)
        this.state.tasks.map( task => {
            if( task.id === id) {
                task.doneAt = task.doneAt ? null : new Date();
            }
        });

        this.setState({ tasks });
    }

    render() {
        return (
            <View style={ styles.container }>
                <ImageBackground source= { todayImage } style={ styles.background }>
                    <View style={ styles.titleBar }>
                        <Text style={ styles.title }> Hoje </Text>
                        <Text style={ styles.subtitle }> 
                            { moment().locale('pt-br').format('ddd, D [de] MMMM')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={ styles.taskContainer }>
                <FlatList 
                data={ this.state.tasks } 
                renderItem={({ item }) => {
                    return <Task { ...item } toggleTask={this.toggleTask} />
                }}>
                </FlatList  >
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: CommonStyle.fontFamily,
        color: CommonStyle.colors.secundary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: CommonStyle.fontFamily,
        color: CommonStyle.colors.secundary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    taskContainer: {
        flex: 7
    }
});
