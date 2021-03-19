import React, {useState} from "react";
import styles from "./Edit.module.css"
import {Button, Col, Form} from "react-bootstrap";
import MenuTag from "@/pages/admin/MenuTag/MenuTag";


const Edit = () => {
    const tagsSample = [
     {
        name: "Sample1"},
    {
        name: "Sample2"},
    ]


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [weight, setWeight] = useState('');
    const [price, setPrice] = useState('');
    const [photo, setPhoto] = useState('');
    const [tags, setTags] = useState(tagsSample);


    const onCancel = () => {

    }

    const onSubmit = () => {

    }

    const onUpdatePhoto = () => {

    }

    const addTag = () => {
        console.log("add button")
    }


    const deleteTag = () => {
        console.log("i delete... yeah")
    }

    return (
            <div className={styles.main}>
                <div className="row justify-content-center">
                    <a href="account" className={styles.muted_nav_item}>
                        Information
                    </a>
                    <a href="orders" className={styles.muted_nav_item}>
                        Orders
                    </a>
                    <a href="menu" className={styles.selected_nav_item}>
                        Menu
                    </a>
                </div>

                <div className={styles.form_area}>
                    <div className="row justify-content-center">
                        <Col xs={6}>
                            <p>Photo</p>
                            <div className={styles.photo_area}>
                            </div>
                            <Button
                                type="submit" className={styles.orng_button_big}
                                onClick={onUpdatePhoto}
                            >
                                Update photo
                            </Button>

                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <p>Dish name</p>
                                    <Form.Control
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        placeholder={name}
                                        className={styles.form_input}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicDescription">
                                    <p>Description</p>
                                    <Form.Control
                                        as="textarea" rows={3}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Description"
                                        className={styles.form_input}
                                    />

                                </Form.Group>
                                <Form.Group controlId="formBasicWeight">
                                    <p>Weight</p>
                                    <Form.Control
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        type="text"
                                        placeholder={weight}
                                        className={styles.form_input}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPrice">
                                    <p>Price (in UAH)</p>
                                    <Form.Control
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        type="text"
                                        placeholder={price}
                                        className={styles.form_input}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicTags">
                                    <p>Tags</p>
                                    <div className={styles.tags_area}>
                                    {tags.map((tag) => (
                                        <MenuTag tag={tag} canDelete={true} onDelete={deleteTag}/>
                                    ))}
                                    <button type="button" className={styles.add_btn} onClick={addTag}/>
                                </div>
                                </Form.Group>
                            </Form>
                            <div className="flex row" style={{marginTop: "30px"}}>
                                <Button
                                    type="button" className={styles.cancel_btn}
                                    onClick={onCancel}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit" className={styles.orng_button}
                                    onClick={onSubmit}
                                >
                                    Save changes
                                </Button>
                            </div>


                        </Col>
                    </div>
                </div>
            </div>
    )
}

export default Edit;