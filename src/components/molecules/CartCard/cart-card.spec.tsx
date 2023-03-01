import React from 'react';
import {fireEvent, render} from '@test/utils/test-utils';
import {CartCard} from './';
import {mock} from '@test/mocks';

describe('<CartCard />', () => {
  it('should be defined', () => {
    const card = render(
      <CartCard
        id="1"
        counter={mock.cartCard.counter}
        description={mock.cartCard.description}
        image={mock.cartCard.image}
        name={mock.cartCard.name}
        onDelete={mock.cartCard.onDelete}
        price={mock.cartCard.price}
      />,
    );

    expect(card).toBeDefined();
  });

  it('should be able to find the title card', async () => {
    const {findByText} = render(
      <CartCard
        id="1"
        counter={mock.cartCard.counter}
        description={mock.cartCard.description}
        image={mock.cartCard.image}
        name={mock.cartCard.name}
        onDelete={mock.cartCard.onDelete}
        price={mock.cartCard.price}
      />,
    );

    const title = await findByText(mock.cartCard.name);

    expect(title).toBeTruthy();
  });

  it('should be able to find the description of the card', async () => {
    const {findByText} = render(
      <CartCard
        id="1"
        counter={mock.cartCard.counter}
        description={mock.cartCard.description}
        image={mock.cartCard.image}
        name={mock.cartCard.name}
        onDelete={mock.cartCard.onDelete}
        price={mock.cartCard.price}
      />,
    );

    const description = await findByText(mock.cartCard.description);

    expect(description).toBeTruthy();
  });

  it('should be able to find the price of the card', async () => {
    const {findByText} = render(
      <CartCard
        id="1"
        counter={mock.cartCard.counter}
        description={mock.cartCard.description}
        image={mock.cartCard.image}
        name={mock.cartCard.name}
        onDelete={mock.cartCard.onDelete}
        price={mock.cartCard.price}
      />,
    );

    const price = await findByText(
      `$${Number(mock.cartCard.price * mock.cartCard.counter || 0).toFixed(2)}`,
    );

    expect(price).toBeTruthy();
  });

  it('should be able to increment the counter', async () => {
    const {findByTestId, findByText} = render(
      <CartCard
        id="1"
        counter={mock.cartCard.counter}
        description={mock.cartCard.description}
        image={mock.cartCard.image}
        name={mock.cartCard.name}
        onDelete={mock.cartCard.onDelete}
        price={mock.cartCard.price}
      />,
    );

    const incrementButton = await findByTestId(
      mock.cartCard.ids.IncrementCounterButtonID,
    );

    fireEvent.press(incrementButton);

    const counter = await findByText('2');

    expect(counter).toBeTruthy();
  });

  it('should be able to increment the counter and check it value', async () => {
    const {findByTestId, findByText} = render(
      <CartCard
        id="1"
        counter={mock.cartCard.counter}
        description={mock.cartCard.description}
        image={mock.cartCard.image}
        name={mock.cartCard.name}
        onDelete={mock.cartCard.onDelete}
        price={mock.cartCard.price}
      />,
    );

    const incrementButton = await findByTestId(
      mock.cartCard.ids.IncrementCounterButtonID,
    );

    fireEvent.press(incrementButton);

    const price = await findByText(
      `$${Number(mock.cartCard.price * 2).toFixed(2)}`,
    );
    const counter = await findByText('2');

    expect(counter).toBeTruthy();
    expect(price).toBeTruthy();
  });

  it('should be able to decrement the counter', async () => {
    const {findByTestId, findByText} = render(
      <CartCard
        id="1"
        counter={2}
        description={mock.cartCard.description}
        image={mock.cartCard.image}
        name={mock.cartCard.name}
        onDelete={mock.cartCard.onDelete}
        price={mock.cartCard.price}
      />,
    );

    const decrementButton = await findByTestId(
      mock.cartCard.ids.DecrementCounterButtonID,
    );

    fireEvent.press(decrementButton);

    const counter = await findByText('1');

    expect(counter).toBeTruthy();
  });

  it('should be able to decrement the counter and check it value', async () => {
    const {findByTestId, findByText} = render(
      <CartCard
        id="1"
        counter={2}
        description={mock.cartCard.description}
        image={mock.cartCard.image}
        name={mock.cartCard.name}
        onDelete={mock.cartCard.onDelete}
        price={mock.cartCard.price}
      />,
    );

    const decrementButton = await findByTestId(
      mock.cartCard.ids.DecrementCounterButtonID,
    );

    fireEvent.press(decrementButton);

    const price = await findByText(
      `$${Number(mock.cartCard.price * mock.cartCard.counter).toFixed(2)}`,
    );
    const counter = await findByText('1');

    expect(counter).toBeTruthy();
    expect(price).toBeTruthy();
  });

  it('should be able to reset the counter if it value is less than 0 when increment', async () => {
    const {findByTestId, findByText} = render(
      <CartCard
        id="1"
        counter={0}
        description={mock.cartCard.description}
        image={mock.cartCard.image}
        name={mock.cartCard.name}
        onDelete={mock.cartCard.onDelete}
        price={mock.cartCard.price}
      />,
    );

    const incrementButton = await findByTestId(
      mock.cartCard.ids.IncrementCounterButtonID,
    );

    fireEvent.press(incrementButton);

    const price = await findByText(
      `$${Number(mock.cartCard.price * mock.cartCard.counter).toFixed(2)}`,
    );
    const counter = await findByText('1');

    expect(counter).toBeTruthy();
    expect(price).toBeTruthy();
  });

  it('not should be able to increment the counter if it value was 99', async () => {
    const maxCounter = 99;

    const {findByTestId, findByText} = render(
      <CartCard
        id="1"
        counter={maxCounter}
        description={mock.cartCard.description}
        image={mock.cartCard.image}
        name={mock.cartCard.name}
        onDelete={mock.cartCard.onDelete}
        price={mock.cartCard.price}
      />,
    );

    const incrementButton = await findByTestId(
      mock.cartCard.ids.IncrementCounterButtonID,
    );

    fireEvent.press(incrementButton);

    const price = await findByText(
      `$${Number(mock.cartCard.price * maxCounter).toFixed(2)}`,
    );
    const counter = await findByText('99');

    expect(counter).toBeTruthy();
    expect(price).toBeTruthy();
  });

  it('should be able to reset the counter if it value is less than 0 when decrement', async () => {
    const {findByTestId, findByText} = render(
      <CartCard
        id="1"
        counter={0}
        description={mock.cartCard.description}
        image={mock.cartCard.image}
        name={mock.cartCard.name}
        onDelete={mock.cartCard.onDelete}
        price={mock.cartCard.price}
      />,
    );

    const decrementButton = await findByTestId(
      mock.cartCard.ids.DecrementCounterButtonID,
    );

    fireEvent.press(decrementButton);

    const price = await findByText(
      `$${Number(mock.cartCard.price * mock.cartCard.counter).toFixed(2)}`,
    );
    const counter = await findByText('1');

    expect(counter).toBeTruthy();
    expect(price).toBeTruthy();
  });

  it('should be able to call onDelete function', async () => {
    const {findByTestId} = render(
      <CartCard
        id="1"
        counter={2}
        description={mock.cartCard.description}
        image={mock.cartCard.image}
        name={mock.cartCard.name}
        onDelete={mock.cartCard.onDelete}
        price={mock.cartCard.price}
      />,
    );

    const deleteButton = await findByTestId(
      mock.cartCard.ids.DeleteCartButtonID,
    );

    fireEvent.press(deleteButton);

    expect(mock.cartCard.onDelete).toHaveBeenCalled();
  });

  it('should be able to match with snapshot', () => {
    const card = render(
      <CartCard
        id="1"
        counter={mock.cartCard.counter}
        description={mock.cartCard.description}
        image={mock.cartCard.image}
        name={mock.cartCard.name}
        onDelete={mock.cartCard.onDelete}
        price={mock.cartCard.price}
      />,
    ).toJSON();

    expect(card).toMatchSnapshot();
  });
});
