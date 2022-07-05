import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { Badge } from '@mui/material';

const Navbar = () => {
    return (
        <div className='navbar h-14 shadow-md relative z-10'>
            <div className='wrapper px-5 py-3 flex justify-between items-center'>
                <div className='left flex flex-1 items-center'>
                    <div className='language cursor-pointer text-base'>En</div>
                    <div className="searchInput flex border-[2px] border-solid border-lightgrey rounded-md items-center p-1 mx-2 focus-within:border-[#8a4af3] transition-all">
                        <input type="text" className="input outline-none px-1" />
                        <SearchRoundedIcon style={{ fontSize: '16px' }} />
                    </div>
                </div>

                <div className='center flex-1 items-center text-center'>
                    <div className='logo font-bold text-xl text-[#8a4af3]'>Panda Shop</div>
                </div>

                <div className='right flex flex-1 items-center justify-end gap-4'>
                    <div className='text-sm cursor-pointer hover:text-[#8a4af3] font-medium'>Register</div>
                    <div className='text-sm cursor-pointer hover:text-[#8a4af3] font-medium'>Sign In</div>

                    <Badge badgeContent={2} color={'primary'}>
                        <AddShoppingCartRoundedIcon />
                    </Badge>
                </div>
            </div>
        </div>
    );
};

export default Navbar;