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
    <div className="pet-layout">
      <div className="pet-row">
        <PetFoodComponent />
        <PetAccessoriesComponent />
        <PetSuppliesComponent />
       <div className="treat" ><PetTreatsComponent /></div>
        <NutritionalSupplementsComponent />
      </div>
      <div className="pet-row">
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

