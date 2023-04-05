import { useRef } from 'react';
import styles from '@/style/Modal.module.scss';
import { useClickOutside } from '@/hooks/useClickOutside';

function Modal({ showModal, handleCloseModal, children }) {
	const modalRef = useRef();

	useClickOutside(modalRef, showModal, handleCloseModal);

	return (
		<div>
			{showModal && (
				<div className={styles.overlay}>
					<div ref={modalRef} className={styles.modal}>
						<div className={styles.modalContent}>
							{children}
							<button onClick={handleCloseModal}>x</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Modal;
