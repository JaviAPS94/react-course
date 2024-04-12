import PropTypes from 'prop-types';
import className from 'classnames';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}
) {
    const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500': primary,
        'border-gray-500 bg-gray-500': secondary,
        'border-green-500 bg-green-500': success,
        'border-yellow-500 bg-yellow-500': warning,
        'border-red-500 bg-red-500': danger,
        'text-white': !outline && (primary || secondary || success || warning || danger),
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
    });

    return <button {...rest} className={classes} >{children}</button>;
}

Button.propTypes = {
    checkVariationValues: ({ primary, secondary, success, warning, danger, outline, rounded }) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger)

        if (count > 1) {
            return new Error(
                `You can't use more than one variation at a time`
            );
        }
    }
};

export default Button;