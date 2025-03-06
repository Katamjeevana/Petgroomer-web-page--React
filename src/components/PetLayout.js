import React from 'react';
import PetFoodComponent from './PetFoodComponent';
import PetAccessoriesComponent from './PetAccessoriesComponent';
import PetSuppliesComponent from './PetSuppliesComponent';
import PetTreatsComponent from './PetTreatsComponent';
import NutritionalSupplementsComponent from './NutritionalSupplementsComponent';
import PetGroomingComponent from './PetGroomingComponent';
import PetBedsComponent from './PetBedsComponent';
import PetApparelsComponent from './PetApparelsComponent';
import PetComboComponent from './PetComboComponent';
import OutdoorAccessoriesComponent from './OutdoorAccessoriesComponent';
import './Pet.css';

const PetLayout = () => {
  return (
    <div className="pet-layouts">
      <div className="pets-rows">
        <PetFoodComponent />
        <PetAccessoriesComponent />
        <PetSuppliesComponent />
       <div className="treat" ><PetTreatsComponent /></div>
        <NutritionalSupplementsComponent />
      </div>
      <div className="pets-rows">
        <PetGroomingComponent />
        <PetBedsComponent />
        <PetApparelsComponent />
        <PetComboComponent />
        <OutdoorAccessoriesComponent />
      </div>
    </div>
  );
};

export default PetLayout;

