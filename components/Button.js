import React, { Component } from 'react';
import {StyleSheet,Dimensions} from 'react-native';
import { Block, Button } from 'galio-framework';

export default class CustomButton extends Component{
    render(){
        const {children}=this.props
        return (
            <Block>
                <Button>
                    {children}
                </Button>
            </Block>
        )
    }
}


const styles=StyleSheet.create({})