import { StateType } from "../App"
import dialogsReducer, { addMessageAC, setNewMessageAC } from "./dialogs-reducer"
import profileReducer, {  addPostAC, setNewPostAC } from "./profile-reducer"


// let rerenderEntireTree = (state: StateType) => {

// }


// export let store = {
//     _state: {
//         profileData: {
//             posts: [
//                 {
//                     id: '1',
//                     name: 'Dima',
//                     img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
//                     description: 'hello guys'
//                 },
//                 {
//                     id: '2',
//                     name: 'Gena',
//                     img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
//                     description: 'yoyoy'
//                 },
//                 {
//                     id: '3',
//                     name: 'Geka',
//                     img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
//                     description: 'hello girls'
//                 },
//                 {
//                     id: '4',
//                     name: 'Valera',
//                     img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
//                     description: 'hello girls'
//                 },
//                 {
//                     id: '5',
//                     name: 'Sveta',
//                     img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
//                     description: 'hello girls'
//                 }
//             ],
//             newPost: ''
//         },
//         dialogsData: {
//             dialogs: [
//                 {
//                     id: '1',
//                     name: 'Yura'
//                 },
//                 {
//                     id: '2',
//                     name: 'Pasha'
//                 },
//                 {
//                     id: '3',
//                     name: 'Oleg'
//                 },
//                 {
//                     id: '4',
//                     name: 'Kiril'
//                 }
//             ],
//             messages: [
//                 {
//                     id: '1',
//                     message: 'Hello Kitty'
//                 },
//                 {
//                     id: '2',
//                     message: 'Hoi'
//                 },
//                 {
//                     id: '3',
//                     message: 'Bye'
//                 },
//                 {
//                     id: '4',
//                     message: 'Lol'
//                 }
//             ],
//             newMessage: ''
//         },
//         sideBarData: [
//             {
//                 id: '1',
//                 name: 'Igor',
//                 img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAADiCAMAAAD5w+JtAAAAe1BMVEX///8AAACGhobFxcXo6Ojv7+/5+fnz8/Pe3t78/PxoaGi0tLSRkZGlpaXq6upjY2Pi4uJMTEzLy8uNjY1JSUnT09MnJyetra1SUlJ7e3tDQ0NtbW07Ozu5ubmBgYFXV1cYGBiZmZkgICA9PT0MDAx1dXUuLi4cHBwrKysbch0cAAALfElEQVR4nO1dfZ+qLBCtfK10ezGzLLfc2vb5/p/wyQATAUFFwH73/Hlva5wEZuYww0wmg2PuZWF0eNyn0+n1vAhC3x3+O5XByY7/Tes4JY7ucUmBu1zdCXIv3Bex7sH1xvqbzg0itXQPsBfiSyO7Aqu17kF2hrXhsiuQ6x5nN/j8d4cm6Qg3GvdXlF2BTPdw22LZht0Tge4Bt4ItPDVLnHSPuQWS1uyeuOgetSi8XRd60+lmrnvkQth2YzeWNxh0pjeGNTg/9KBn/i7qX3vRm04T3Qwa0dbokbh/55n/pZsHA3lvepDkITIxbjpKovfCNfR088ExX8mkV+Bo0jx1Oxr1RoS6WZVwSXlFBlJDYl9nPwi9qSGBk93X7DUg0k3uSY8hj8nBr256XwO+vQIrvfSGnJwAWt+gMzg9rW63+zM8PY27qHtWQW861eTKzMUE3P5I9fCT7nMyocVVayXh9oSGGZorpKdBm+mkcnaH6pC3uw7YDYrVQ1sxvenUV8pPiV3HoHQF9tM5u0HhKaFULUkU6mygm6ufntPpjzJ+Tyz/1BNUaiLmJ+X8FMdJfY6KOuGmlt+kOXVnANiKCbY/Zu+HpWJ+jlTl7I+7ZX0r5jfJJdLbfXk8s3pQzW8uj95LyI05QrjypNFQErsz8p6bX6HyKNeTQ69i2RoPgdVnUy4ksFtgryVu2LTUyzD9o/hN3e36Yn9WvdLbMBghrChh65r56aNyfvO0B7k0p28YTO1Dw1lL51DwkLMVh5zxNxuFxCC6LMDHItw2Z9Mx9IGdIlIVxG147RazbCtyqM5Yghr4CQpph+/Et1tkQNJjEw38PIHcgu9ta8fKoT5Ix1kubwM9dZMVqPuWjqPcxiDwGnRV9Xza43RkUzSdIgU9sshoGVE6SkEiJrtVL3efFpqoDuBZ43hNzZ5yHm2Cqj2DAMjo9I69Y1GKhqwjadKi0pOQ8kCefqc6Sgio/GRMJHLia8n0ofGToiOQD9ZSDElxQOUcFJChpWp99wWSn6xdnFh+kp7bDgQ/aauk/mA9hZ4EP2lPvtUerCdbuR6qydO4agZCU/1VnZ88jbkWA2oqJa/xk+ji456t0uPpCmrbuEQXMccerCsJFI+0HxKPQDB+Z3nPbQecH74JOOHq/Hikx6TJofGT4kOPS1g33xg/bRc5uBi/qoK+rqh8V9a8rdYMHnALUF1/i8HGzwVrleDLhzW/8AxnzIRXJRiN5WTYALflP9dPlkT+Gn9PlSfovGYEG1/pWkPjfAqXy3AxZW9/RXi8eH4ogfk0FQnwnd2t/OC9ijuNH5hbM7SbxmwZzSl/ktnrb95nRKWyqreEJakShPMTOKVtTdYWnwLomVrC9jf8/E7wy/C1KIot9qvAR561XkWV4FkrMPYrCj+Ao52cViFP43XyxQmUhi8rdDwT3l49y67cCayXwfPvAtsfFCJexs9/fxTM8cNkMtfHMK/Rq9lhF83cptANCZ33Gg0gPB6CVXrbHC0tHMnDMXyxlBJYU0xfhnm1yBE/Ob3pqImfEfxwDag8Q9iz/Q+vrE2umYH6CVL77aovPCgxp7u31ozxKxWGnwZ+5d/W0svq8oTKBHMAv/xhvTi4UcZYeshN2kLpptSyW4h0QuXyro99rf+cUCv8Ny5j+ybJsMzIwoMocm03TIJhsKX97BjgHtHsP/5SfwMUV86eG8sW7MOqj4/AL98omMWX/TXlCb7J7rq/EPvjS146gneWv75JtUSR8fk9l6bItuDQpl54WCBrD+aB6utvEhF+UgAMqeooUB0/YEhVm3ih+SkD0NVWfX4E9hcFSRvgi5SfHwH7oKAwD+TYKD8/AvZ9eOUVSuTKsyegizH494SKfsc65mc1y/6gxfpNUOg2tFsBp4kGiRdMnKHlO+CcKS/OmaAN5j5wYPbHDUEGw4MbQfSHr216lrHbII6hHUQvSSJSZWUpQAVkwdqOo2MoU+R6yYOrreMM+BPygYtc/D3AC8E6WnIvUMSzJ/a6RGy8UoGncbnPBZtmfpbyT7LxvGf1lTkQLpY/z9vkqslAnGgH56fvJkLn1oJfVTTiuD3Y/NR5B/+8UgjPjQXLpMc7b8NYGULvCW85O4AyCP5Bq/s6TbsH3P0C8Ls9HmmkJS+yBl9wA33CFWoucxGZxOoAVtZ/8h640byv1DAH+6i0CmdY12TOpfQ3IQMoDFWxszCAmziT9Tiw0Woo2GQBiIW0Cj0nmDWCSDwr8C335+oPmIdGikDuY8oDZRcBp55G3C8McWZYQIFr6clVC/0Ak24xDxlDyot/TbYWFduAbuWAIG9Uyws4QYkl83p/zPzGlPqf0A/XokkwARMC6iYQBKg3qqX2X2uT1G/AXNcW9NEBTRZxTAD970u9yni+BT4m6T3DqW5aP48jY1hlCfJqlvjrryfW/jJA6Z2kjYOz888c5wUAHZnXQx+v6fr9P2J2oowRk4wDAFJj6kbQZd/HeCU9VpgVpEPQ5QEFpcRmwqrSPZAWDj3DJNuHgNSYO+HGfFFvXKDE+2hZqk/HEkEpsJDqkRPWrzqgFf+jt2dqq6BSIaPpK3byi7aaW0R9QUg1M800vFESZGlN3nq9ZqwtF9HTmjDPQXm7UOvEA+8wAnqVN9jyYLC8rd9sepWOJWmbPb5sJWFAzxUOypD2R1zfs1Geq7lbyxtuWTskeq5VXls3kna4Zfa02Hjft3SMhN/bI9vxNdF5pdRPUy+L9ni/Ep4v4mOOjY5LXrrAfZclbZqcSbd2A5BBmmAjsPs/dkyG+btAFf4gKgfZA7XSpEdCMYZ2tUJkAwNbc/riNQGvO37hkvgVjo4fYGHvN6qH+dM36BYAsfy5Frn/bE5RUbIarXZ4/cbrPBem8pgaG2EALkwkeMEkvI4KRH+G6YJUQOvw9M889g1pCAtkE+ALNN8DhQotiCCc5n4Rp4rFgwGg8TYQHqogq+BarHYKuwQTKeAL1HbbhCBcYNSwjgZWUO/Gdj1mxEqDxUiG99o+4a8PwY2tZfR9Op1+o9CKqcGhB8290UYQzs5O160it9WssyMMqOyvWz3NwnSCSJ7o6iij4N9QM4+6/Xa+yqfUiL9NO0AqsEbxQHcbVgpwqXl2sFQ/+8yud2hlmFoxL09R+qlglTxYk04BrfIgs69E6789utvSEHc7fqcU91egnUp+635mwDq0Khc6S1k12JFomujMlHTjqs7ATT0WhI2nmO8DS8uR7jr7xcKfftdeV0H2udjMLJUZvbYVLupBgTy3itHA7bxION0jJMDOkhntBvWZtG+2Gy/u/zuGQxzQe86XlUcrVk+EvbRKOTdvYoe+7jffOpJ+UNvPotOF1+xhL2l2Wk0ZQTjS36Xfj6Nt5RfhRuiphM3Tb9t477/VsuOm5ixbd9FOey4Mv1tb8j2j2VAD7KBbn9tdD59x26Pp+iZrYSDdpEcT33P7H7OAl/RpF/XENRLc4eZ8UZaDS+uXuJXSUD4S8MZdOb1Rf5fC88WN5XUr5UpvjJYVXXAIGq7GhPD8XEabvTdujeGGK7lz7/1wzGLGcvTiLOIa1Q5oeIXxMJ2X/9JFnmRWHK9t2/bjbbYMj5vh2lgz9W+Jc1MrGJVLAsUmI8GB5rR9Dj1q/nabZnfmgyiL6dtM0zTUJVjiRsqxA9cyct3DkQ5sCVI70o0c1Rkq10cyBN5Hv76q0twjrjQZiJ5gH9TRAQle8sIvswBTVOYNXcnHDRAL0rsUfgLAQavkmNYgvAKlubB+Oz7YH2v8AAodr0uX87GgSDOSojwaiuKShw9efkXHPkqu+wfBI3oUfhasjxEF6Ug+evssYqRc8wiGxeyjzUNhINqed48L6aTnqanh2NNayX8Qfj6c33TyscE7ANGp+8Pwj9+48Y/fuPGP37jxj9+48fH8rvzPjBhXVqXBhyBgllJ8BILJ/9NvrROtOXzyAAAAAElFTkSuQmCC'
//             },
//             {
//                 id: '2',
//                 name: 'Max',
//                 img: 'data:image/png;base64,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'
//             },
//             {
//                 id: '3',
//                 name: 'Yulia',
//                 img: 'data:image/png;base64,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'
//             },
//             {
//                 id: '4',
//                 name: 'Oleg',
//                 img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAADiCAMAAAD5w+JtAAAAe1BMVEX///8AAACGhobFxcXo6Ojv7+/5+fnz8/Pe3t78/PxoaGi0tLSRkZGlpaXq6upjY2Pi4uJMTEzLy8uNjY1JSUnT09MnJyetra1SUlJ7e3tDQ0NtbW07Ozu5ubmBgYFXV1cYGBiZmZkgICA9PT0MDAx1dXUuLi4cHBwrKysbch0cAAALfElEQVR4nO1dfZ+qLBCtfK10ezGzLLfc2vb5/p/wyQATAUFFwH73/Hlva5wEZuYww0wmg2PuZWF0eNyn0+n1vAhC3x3+O5XByY7/Tes4JY7ucUmBu1zdCXIv3Bex7sH1xvqbzg0itXQPsBfiSyO7Aqu17kF2hrXhsiuQ6x5nN/j8d4cm6Qg3GvdXlF2BTPdw22LZht0Tge4Bt4ItPDVLnHSPuQWS1uyeuOgetSi8XRd60+lmrnvkQth2YzeWNxh0pjeGNTg/9KBn/i7qX3vRm04T3Qwa0dbokbh/55n/pZsHA3lvepDkITIxbjpKovfCNfR088ExX8mkV+Bo0jx1Oxr1RoS6WZVwSXlFBlJDYl9nPwi9qSGBk93X7DUg0k3uSY8hj8nBr256XwO+vQIrvfSGnJwAWt+gMzg9rW63+zM8PY27qHtWQW861eTKzMUE3P5I9fCT7nMyocVVayXh9oSGGZorpKdBm+mkcnaH6pC3uw7YDYrVQ1sxvenUV8pPiV3HoHQF9tM5u0HhKaFULUkU6mygm6ufntPpjzJ+Tyz/1BNUaiLmJ+X8FMdJfY6KOuGmlt+kOXVnANiKCbY/Zu+HpWJ+jlTl7I+7ZX0r5jfJJdLbfXk8s3pQzW8uj95LyI05QrjypNFQErsz8p6bX6HyKNeTQ69i2RoPgdVnUy4ksFtgryVu2LTUyzD9o/hN3e36Yn9WvdLbMBghrChh65r56aNyfvO0B7k0p28YTO1Dw1lL51DwkLMVh5zxNxuFxCC6LMDHItw2Z9Mx9IGdIlIVxG147RazbCtyqM5Yghr4CQpph+/Et1tkQNJjEw38PIHcgu9ta8fKoT5Ix1kubwM9dZMVqPuWjqPcxiDwGnRV9Xza43RkUzSdIgU9sshoGVE6SkEiJrtVL3efFpqoDuBZ43hNzZ5yHm2Cqj2DAMjo9I69Y1GKhqwjadKi0pOQ8kCefqc6Sgio/GRMJHLia8n0ofGToiOQD9ZSDElxQOUcFJChpWp99wWSn6xdnFh+kp7bDgQ/aauk/mA9hZ4EP2lPvtUerCdbuR6qydO4agZCU/1VnZ88jbkWA2oqJa/xk+ji456t0uPpCmrbuEQXMccerCsJFI+0HxKPQDB+Z3nPbQecH74JOOHq/Hikx6TJofGT4kOPS1g33xg/bRc5uBi/qoK+rqh8V9a8rdYMHnALUF1/i8HGzwVrleDLhzW/8AxnzIRXJRiN5WTYALflP9dPlkT+Gn9PlSfovGYEG1/pWkPjfAqXy3AxZW9/RXi8eH4ogfk0FQnwnd2t/OC9ijuNH5hbM7SbxmwZzSl/ktnrb95nRKWyqreEJakShPMTOKVtTdYWnwLomVrC9jf8/E7wy/C1KIot9qvAR561XkWV4FkrMPYrCj+Ao52cViFP43XyxQmUhi8rdDwT3l49y67cCayXwfPvAtsfFCJexs9/fxTM8cNkMtfHMK/Rq9lhF83cptANCZ33Gg0gPB6CVXrbHC0tHMnDMXyxlBJYU0xfhnm1yBE/Ob3pqImfEfxwDag8Q9iz/Q+vrE2umYH6CVL77aovPCgxp7u31ozxKxWGnwZ+5d/W0svq8oTKBHMAv/xhvTi4UcZYeshN2kLpptSyW4h0QuXyro99rf+cUCv8Ny5j+ybJsMzIwoMocm03TIJhsKX97BjgHtHsP/5SfwMUV86eG8sW7MOqj4/AL98omMWX/TXlCb7J7rq/EPvjS146gneWv75JtUSR8fk9l6bItuDQpl54WCBrD+aB6utvEhF+UgAMqeooUB0/YEhVm3ih+SkD0NVWfX4E9hcFSRvgi5SfHwH7oKAwD+TYKD8/AvZ9eOUVSuTKsyegizH494SKfsc65mc1y/6gxfpNUOg2tFsBp4kGiRdMnKHlO+CcKS/OmaAN5j5wYPbHDUEGw4MbQfSHr216lrHbII6hHUQvSSJSZWUpQAVkwdqOo2MoU+R6yYOrreMM+BPygYtc/D3AC8E6WnIvUMSzJ/a6RGy8UoGncbnPBZtmfpbyT7LxvGf1lTkQLpY/z9vkqslAnGgH56fvJkLn1oJfVTTiuD3Y/NR5B/+8UgjPjQXLpMc7b8NYGULvCW85O4AyCP5Bq/s6TbsH3P0C8Ls9HmmkJS+yBl9wA33CFWoucxGZxOoAVtZ/8h640byv1DAH+6i0CmdY12TOpfQ3IQMoDFWxszCAmziT9Tiw0Woo2GQBiIW0Cj0nmDWCSDwr8C335+oPmIdGikDuY8oDZRcBp55G3C8McWZYQIFr6clVC/0Ak24xDxlDyot/TbYWFduAbuWAIG9Uyws4QYkl83p/zPzGlPqf0A/XokkwARMC6iYQBKg3qqX2X2uT1G/AXNcW9NEBTRZxTAD970u9yni+BT4m6T3DqW5aP48jY1hlCfJqlvjrryfW/jJA6Z2kjYOz888c5wUAHZnXQx+v6fr9P2J2oowRk4wDAFJj6kbQZd/HeCU9VpgVpEPQ5QEFpcRmwqrSPZAWDj3DJNuHgNSYO+HGfFFvXKDE+2hZqk/HEkEpsJDqkRPWrzqgFf+jt2dqq6BSIaPpK3byi7aaW0R9QUg1M800vFESZGlN3nq9ZqwtF9HTmjDPQXm7UOvEA+8wAnqVN9jyYLC8rd9sepWOJWmbPb5sJWFAzxUOypD2R1zfs1Geq7lbyxtuWTskeq5VXls3kna4Zfa02Hjft3SMhN/bI9vxNdF5pdRPUy+L9ni/Ep4v4mOOjY5LXrrAfZclbZqcSbd2A5BBmmAjsPs/dkyG+btAFf4gKgfZA7XSpEdCMYZ2tUJkAwNbc/riNQGvO37hkvgVjo4fYGHvN6qH+dM36BYAsfy5Frn/bE5RUbIarXZ4/cbrPBem8pgaG2EALkwkeMEkvI4KRH+G6YJUQOvw9M889g1pCAtkE+ALNN8DhQotiCCc5n4Rp4rFgwGg8TYQHqogq+BarHYKuwQTKeAL1HbbhCBcYNSwjgZWUO/Gdj1mxEqDxUiG99o+4a8PwY2tZfR9Op1+o9CKqcGhB8290UYQzs5O160it9WssyMMqOyvWz3NwnSCSJ7o6iij4N9QM4+6/Xa+yqfUiL9NO0AqsEbxQHcbVgpwqXl2sFQ/+8yud2hlmFoxL09R+qlglTxYk04BrfIgs69E6789utvSEHc7fqcU91egnUp+635mwDq0Khc6S1k12JFomujMlHTjqs7ATT0WhI2nmO8DS8uR7jr7xcKfftdeV0H2udjMLJUZvbYVLupBgTy3itHA7bxION0jJMDOkhntBvWZtG+2Gy/u/zuGQxzQe86XlUcrVk+EvbRKOTdvYoe+7jffOpJ+UNvPotOF1+xhL2l2Wk0ZQTjS36Xfj6Nt5RfhRuiphM3Tb9t477/VsuOm5ixbd9FOey4Mv1tb8j2j2VAD7KBbn9tdD59x26Pp+iZrYSDdpEcT33P7H7OAl/RpF/XENRLc4eZ8UZaDS+uXuJXSUD4S8MZdOb1Rf5fC88WN5XUr5UpvjJYVXXAIGq7GhPD8XEabvTdujeGGK7lz7/1wzGLGcvTiLOIa1Q5oeIXxMJ2X/9JFnmRWHK9t2/bjbbYMj5vh2lgz9W+Jc1MrGJVLAsUmI8GB5rR9Dj1q/nabZnfmgyiL6dtM0zTUJVjiRsqxA9cyct3DkQ5sCVI70o0c1Rkq10cyBN5Hv76q0twjrjQZiJ5gH9TRAQle8sIvswBTVOYNXcnHDRAL0rsUfgLAQavkmNYgvAKlubB+Oz7YH2v8AAodr0uX87GgSDOSojwaiuKShw9efkXHPkqu+wfBI3oUfhasjxEF6Ug+evssYqRc8wiGxeyjzUNhINqed48L6aTnqanh2NNayX8Qfj6c33TyscE7ANGp+8Pwj9+48Y/fuPGP37jxj9+48fH8rvzPjBhXVqXBhyBgllJ8BILJ/9NvrROtOXzyAAAAAElFTkSuQmCC'
//             }
//         ]
//     },
//     _callSubscriber(state: StateType) {
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: (state: StateType) => void) {
//         this._callSubscriber = observer
//     },

//     dispatch(action: any) {
//         this.getState().profileData = profileReducer(this.getState().profileData, action)
//         this.getState().dialogsData = dialogsReducer(this.getState().dialogsData, action)
//         // this.getState().sideBarData = sideBarReducer(this.getState().sideBarData, action)

//         this._callSubscriber(this.getState())

//     }
// }


// export let state = {

//     profileData: {
//         posts: [
//             {
//                 id: '1',
//                 name: 'Dima',
//                 img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
//                 description: 'hello guys'
//             },
//             {
//                 id: '2',
//                 name: 'Gena',
//                 img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
//                 description: 'yoyoy'
//             },
//             {
//                 id: '3',
//                 name: 'Geka',
//                 img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
//                 description: 'hello girls'
//             },
//             {
//                 id: '4',
//                 name: 'Valera',
//                 img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
//                 description: 'hello girls'
//             },
//             {
//                 id: '5',
//                 name: 'Sveta',
//                 img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
//                 description: 'hello girls'
//             }
//         ],
//         newPost: ''
//     },
//     dialogsData: {
//         dialogs: [
//             {
//                 id: '1',
//                 name: 'Yura'
//             },
//             {
//                 id: '2',
//                 name: 'Pasha'
//             },
//             {
//                 id: '3',
//                 name: 'Oleg'
//             },
//             {
//                 id: '4',
//                 name: 'Kiril'
//             }
//         ],
//         messages: [
//             {
//                 id: '1',
//                 message: 'Hello Kitty'
//             },
//             {
//                 id: '2',
//                 message: 'Hoi'
//             },
//             {
//                 id: '3',
//                 message: 'Bye'
//             },
//             {
//                 id: '4',
//                 message: 'Lol'
//             }
//         ],
//         newMessage: ''
//     },
//     sideBarData: [
//         {
//             id: '1',
//             name: 'Igor',
//             img: 'data:image/png;base64,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'
//         },
//         {
//             id: '2',
//             name: 'Max',
//             img: 'data:image/png;base64,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'
//         },
//         {
//             id: '3',
//             name: 'Yulia',
//             img: 'data:image/png;base64,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'
//         },
//         {
//             id: '4',
//             name: 'Oleg',
//             img: 'data:image/png;base64,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'
//         }
//     ]
// }

// export const addPost = () => {

//     let newPost = {
//         id: String(Math.floor(Math.random() * 33433)),
//         name: 'Kiril',
//         img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
//         description: state.profileData.newPost
//     }
//     state.profileData.posts.push(newPost)
//     state.profileData.newPost = ''
//     rerenderEntireTree(state)
// }

// export const addMessage = () => {
//     let newMessage = {
//         id: String(Math.floor(Math.random() * 12234)),
//         message: state.dialogsData.newMessage
//     }
//     state.dialogsData.messages.push(newMessage)
//     state.dialogsData.newMessage = ''
//     rerenderEntireTree(state)
// }


// export const changeNewPost = (newValue: string) => {
//     state.profileData.newPost = newValue
//     rerenderEntireTree(state)
// }

// export const changeNewMessage = (newValue: string) => {
//     state.dialogsData.newMessage = newValue
//     rerenderEntireTree(state)
// }

// export const subscribe = (observer : (state: StateType) => void) => {
//     rerenderEntireTree = observer
// }


