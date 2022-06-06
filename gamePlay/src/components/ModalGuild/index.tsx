import {View, Text, Modal, ModalProps, TouchableWithoutFeedback} from 'react-native';
import { styles } from "./styles";
import React, { ReactNode } from 'react';
import { Background } from '../Background';

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalGuild({children, closeModal, ...rest}: Props){
    return(
        <Modal
            transparent
            animationType='slide'
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.bar}/>
                                {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}