import styles from './PaymentSystems.module.scss'
import { CustomParagraph } from '@/components/CustomParagraph'

import BelCardIcon from '@/assets/icons/paymentSystems/BelCardIcon.svg'
import BitcoinIcon from '@/assets/icons/paymentSystems/BitcoinIcon.svg'
import IOMoneyIcon from '@/assets/icons/paymentSystems/IOIcon.svg'
import MasterCardIcon from '@/assets/icons/paymentSystems/MasterCardIcon.svg'
import MirIcon from '@/assets/icons/paymentSystems/MirIcon.svg';
import QIWIIcon from '@/assets/icons/paymentSystems/QIWIIcon.svg'
import SPBIcon from '@/assets/icons/paymentSystems/SPBIcon.svg'
import VisaIcon from '@/assets/icons/paymentSystems/VisaIcon.svg'

export const PaymentSystems = () => {
    return <div className={styles.root}>
        <CustomParagraph as='b3' className={styles.title}>Способы оплаты</CustomParagraph>
        <div className={styles.wrapper}>
            <IOMoneyIcon className={styles.iOMoneyIcon} />
            <QIWIIcon className={styles.qIWIIcon} />
            <SPBIcon className={styles.sPBIcon} />
            <MasterCardIcon className={styles.masterCardIcon} />
            <BelCardIcon className={styles.belCardIcon} />
            <BitcoinIcon className={styles.bitcoinIcon} />
            <VisaIcon className={styles.visaIcon} />
            <MirIcon className={styles.mirIcon} />
        </div>
    </div>
}