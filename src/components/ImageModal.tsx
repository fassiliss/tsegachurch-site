import { useState } from 'react';
import { createPortal } from 'react-dom';

interface ImageModalProps {
    src: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
}

export default function ImageModal({ src, alt, className = '', style = {} }: ImageModalProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Clickable Image */}
            <img
                src={src}
                alt={alt}
                className={className}
                style={{ ...style, cursor: 'pointer' }}
                onClick={() => setIsOpen(true)}
            />

            {/* Modal */}
            {isOpen && typeof document !== 'undefined' && createPortal(
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        zIndex: 99999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px',
                    }}
                    onClick={() => setIsOpen(false)}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'white',
                            border: 'none',
                            color: 'black',
                            fontSize: '40px',
                            cursor: 'pointer',
                            zIndex: 100000,
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        }}
                    >
                        ×
                    </button>

                    {/* Container to force larger size */}
                    <div
                        style={{
                            width: '70vw',
                            height: '70vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src={src}
                            alt={alt}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                boxShadow: '0 10px 50px rgba(0,0,0,0.5)',
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}