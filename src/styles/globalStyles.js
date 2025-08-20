import { StyleSheet } from 'react-native';

const COLORS = {
    primary: '#14C871',
    white: '#ffffff',
    black: '#000000',
    gray: '#888',
    lightGray: '#f0f0f0ff',
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        color: COLORS.black,
    },
    subtitle: {
        fontSize: 13,
        color: COLORS.gray,
        marginBottom: 20,
    },

    inputLabel: {
        alignSelf: 'flex-start',
        marginBottom: 5,
        marginTop: 10,
        fontWeight: '500',
    },
    input: {
        height: 55,
        width: '100%',
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
    },

    button: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    primaryButton: {
        backgroundColor: COLORS.primary,
    },
    secondaryButton: {
        backgroundColor: COLORS.white,
        borderWidth: 1.5,
        borderColor: COLORS.primary,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    primaryButtonText: {
        color: COLORS.white,
    },
    secondaryButtonText: {
        color: COLORS.black,
    },
});