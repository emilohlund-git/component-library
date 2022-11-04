import React from "react";

type ButtonProps = {
    /** Button children element */
    children: React.ReactNode;
    /** Show loading spinner and disable button */
    isLoading?: boolean;
    /** Button color variant */
    variants?: 'primary' | 'secondary' | 'accent' | 'dark' | 'light';
    /** Disable the button and add not-allowed cursor */
    disabled?: boolean;
    /** Change the size of the button */
    size?: 'sm' | 'md' | 'lg';
} & React.ComponentPropsWithoutRef<'button'>;

const Button = (props: ButtonProps) => {
    const bgVariant = () => {
        switch (props.variants) {
            case 'primary': return 'bg-purple-300 fill-purple-100';
            case 'secondary': return 'bg-fuchsia-300 fill-fuchsia-700';
            case 'accent': return 'bg-cyan-300 fill-cyan-700';
            case 'dark': return 'bg-slate-700 fill-slate-300';
            case 'light': return 'bg-slate-300 fill-slate-700';
        }
    }

    const textVariant = () => {
        switch (props.variants) {
            case 'primary': return 'text-slate-600';
            case 'secondary': return 'text-slate-600';
            case 'accent': return 'text-slate-600';
            case 'dark': return 'text-slate-300';
            case 'light': return 'text-slate-600';
        }
    }

    const svgVariant = () => {
        switch (props.variants) {
            case 'primary': return 'text-purple-900 fill-purple-100';
            case 'secondary': return 'text-fuchsia-900 fill-fuchsia-100';
            case 'accent': return 'text-cyan-800 fill-cyan-100';
            case 'dark': return 'fill-slate-300';
            case 'light': return 'text-slate-400 fill-slate-900';
        }
    }

    const size = () => {
        switch (props.size) {
            case 'sm': return 'py-2 px-4';
            case 'md': return 'py-2 px-4 text-lg';
            case 'lg': return 'py-3 px-5 text-xl';
        }
    }

    return (
        <button type="button" className={`${bgVariant()} hover:brightness-105 hover:scale-105 active:scale-95 active:brightness-[85%] disabled:hover:brightness-100 disabled:hover:cursor-default cursor-pointer transition-all rounded-md ${size()} flex items-center justify-center`} disabled={props.disabled}>
            {props.isLoading
                ?
                <div role="status">
                    <svg className={`mb-1 inline mr-2 w-4 h-4 animate-spin ${svgVariant()}`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className={`${textVariant()} font-semibold`}>loading...</span>
                </div>
                :
                <span className={`${textVariant()} font-semibold`}>{props.children}</span>
            }
        </button>
    );
};

export default Button;