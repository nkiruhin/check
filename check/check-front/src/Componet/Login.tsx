import React from 'react';
import { Stack, Text, Link, FontWeights, PrimaryButton ,TextField } from 'office-ui-fabric-react';

import logo from './image/1logo.png';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };




export const Login: React.FunctionComponent = () => {

    const disabled = true;
    return (<Stack

            horizontalAlign="center"
            verticalAlign="center"
            verticalFill
            styles={{
                root: {
                    width: '0 auto',
                    margin: '0 auto',
                    textAlign: 'center',
                    color: '#000000'
                }
            }}
            gap={80}
        >

            <img src="../image/1logo.png" />
            <div>
                <form action="#" method="get" >

                    <Stack

                        horizontalAlign="center"
                        verticalAlign="center"
                        verticalFill
                        styles={{
                            root: {
                                width: '0 auto',
                                margin: '0 auto',
                                textAlign: 'center',
                                color: '#000000'
                            }
                        }}
                        gap={15}
                    >
                        <input placeholder="логин" id="username" name="username" type="text" />
                        <input placeholder="пароль" id="username" name="username" type="password" />

                        <PrimaryButton type="submit"
                            text="вход"
                            allowDisabledFocus={true}
                            date-automtion-id="test"
                        />
                    </Stack>
                </form>
            </div>


            <Link href="http://dev.office.com/fabric/components/link">Забыли пароль?</Link>


        </Stack>);
};
