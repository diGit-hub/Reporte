import React from 'react';
import { FaChartBar, FaList, FaCog, FaBorderAll } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer style={styles.footer as React.CSSProperties}>
            <FaChartBar style={styles.icon} />
            <FaList style={styles.icon} />
            <FaCog style={styles.icon} />
        </footer>
    );
};

const styles = {
    footer: {
        position: 'absolute',
        bottom: '1vw',
        left: '10vw',
        right: '10vw',
        backgroundColor: 'hsl(200, 87%, 82%)',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGap: '10px', // Adjust the gap relative to the viewport width
        flex: '1',
        borderRadius: '25vw',
    },
    icon: {
        marginRight: '10vw',
        marginLeft: '10vw',
        width: '5vw', // Adjust the size relative to the viewport width
        height: '5vw', // Adjust the size relative to the viewport height
        flexShrink: 0, // Prevent the icons from shrinking
    },
};

export default Footer;