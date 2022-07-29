

export const menuConfig = [
    { label: '首页', key: 'home' }, // 菜单项务必填写 key
    { label: '商铺', key: 'shop' },
    {
        label: '用户',
        key: 'user',
        children: [
        { label: '小程序用户', key: 'weapp-user' },
        { label: '系统用户', key: 'sys-user' }
        ],
    },
    { label: '产品', key: 'product' },
];