import React, { useCallback } from "react";
import Drawer from "react-bottom-drawer";

const BottomDrawer = ({ isVisible, onClose, children }) => {
    const handleCloseDrawer = useCallback(() => {
        onClose();
    }, [onClose]);

    return (
        <Drawer
            duration={250}
            hideScrollbars={true}
            isVisible={isVisible}
            className="drawer"
            onClose={handleCloseDrawer}
        >
            <div className="drawer__content w-screen pr-2">
                {/* Drawer Header */}
                <div className="drawer_header flex justify-end p-5">
                    {/* Drawer Close Button */}
                    <button onClick={handleCloseDrawer}>
                        <img
                            className="object-cover w-6 h-6"
                            src="./icons/Close.svg"
                            alt="닫기 버튼"
                        />
                    </button>
                </div>
                {/* Drawer Content */}
                <div className="temp pr-3">{children}</div>
            </div>
        </Drawer>
    );
};

export default BottomDrawer;
