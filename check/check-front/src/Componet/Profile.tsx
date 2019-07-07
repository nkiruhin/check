import React from 'react';
import { mergeStyleSets, DefaultPalette, IStackTokens,Stack, Text, Link, FontWeights, PrimaryButton ,TextField,Label,SearchBox} from 'office-ui-fabric-react';

import logo from './image/1logo.png';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const Profile: React.FunctionComponent = () => {

    const disabled = true;
    return (

        <Stack

            horizontalAlign="center"
            verticalAlign="center"
            verticalFill
            styles={{
                root: {
                    width: '0 auto',
                    margin: '0 auto',
                    textAlign: 'center',
                    color: 'black'
                }
            }}
            gap={150}
        >
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



                        <Stack

                            verticalAlign="center"
                            verticalFill
                            horizontal disableShrink horizontalAlign="space-between"
                            styles={{
                                root: {
                                    width: '0 auto',
                                    margin: '0 auto',
                                    textAlign: 'center',
                                    color: '#888888'
                                }
                            }}
                            gap={15}
                        >
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

                                <Stack

                                    horizontalAlign="start"
                                    verticalAlign="start"
                                    verticalFill
                                    styles={{
                                        root: {
                                            width: '0 auto',
                                            margin: '0 auto',
                                            textAlign: 'start', background: DefaultPalette.themeTertiary,
                                            color: 'black'
                                        }
                                    }}
                                    gap={15}
                                >

                                    <Label>ФИО</Label>
                                    <input id="nemeuser" name="nameuser" type="text" />

                                </Stack>
                                <Stack

                                    horizontalAlign="start"
                                    verticalAlign="start"
                                    verticalFill
                                    styles={{
                                        root: {
                                            width: '0 auto',
                                            margin: '0 auto',
                                            textAlign: 'start', background: DefaultPalette.themeTertiary,
                                            color: 'black'
                                        }
                                    }}
                                    gap={15}
                                >



                                    <Label>Адрес Проживания</Label>
                                    <input id="adress" name="adress" type="text" />
                                </Stack>
                                <Stack

                                    horizontalAlign="start"
                                    verticalAlign="start"
                                    verticalFill
                                    styles={{
                                        root: {
                                            width: '0 auto',
                                            margin: '0 auto',
                                            textAlign: 'start', background: DefaultPalette.themeTertiary,
                                            color: 'black'
                                        }
                                    }}
                                    gap={15}
                                >



                                    <Label>Номер телефона</Label>

                                    <input id="namberphone" name="namberphone" type="text" />
                                </Stack>


                            </Stack>
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
                                <Stack

                                    horizontalAlign="start"
                                    verticalAlign="start"
                                    verticalFill
                                    styles={{
                                        root: {
                                            width: '0 auto',
                                            margin: '0 auto',
                                            textAlign: 'start', background: DefaultPalette.themeTertiary,
                                            color: 'black'
                                        }
                                    }}
                                    gap={15}
                                >
                                    <Label>Электронный адрес</Label>
                                    <input id="email" name="email" type="text" />
                                </Stack>
                                <Stack

                                    horizontalAlign="start"
                                    verticalAlign="start"
                                    verticalFill
                                    styles={{
                                        root: {
                                            width: '0 auto',
                                            margin: '0 auto',
                                            textAlign: 'start', background: DefaultPalette.themeTertiary,
                                            color: 'black'
                                        }
                                    }}
                                    gap={15}
                                >
                                    <Label>ИНН</Label>
                                    <input id="INN" name="INN" type="text" />
                                </Stack>
                                <Stack

                                    horizontalAlign="start"
                                    verticalAlign="start"
                                    verticalFill
                                    styles={{
                                        root: {
                                            width: '0 auto',
                                            margin: '0 auto',
                                            textAlign: 'start', background: DefaultPalette.themeTertiary,
                                            color: 'black'
                                        }
                                    }}
                                    gap={15}
                                >



                                    <Label>ОГРН</Label>
                                    <input id="OGRN" name="OGRN" type="text" />
                                </Stack>
                            </Stack>
                        </Stack>



                        <Stack

                            horizontalAlign="end"
                            verticalAlign="end"
                            verticalFill
                            styles={{
                                root: {
                                    width: '0 auto',
                                    margin: '0 auto',
                                    textAlign: 'end',
                                    color: 'black'
                                }
                            }}
                            gap={15}
                        >

                            <PrimaryButton type="submit"
                                text="Сохранить изменения"
                                allowDisabledFocus={true}
                                date-automtion-id="test" />

                        </Stack>
                    </Stack>
                </form>
            </div>
        </Stack>);
};